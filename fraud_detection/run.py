import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.covariance import EmpiricalCovariance, MinCovDet
from networkx import nx
from search_transaction import search_transaction

data = pd.read_csv('full_hist.csv')

senders = data['Address Sender'].value_counts().index.values
receivers = data['Address Receiver'].value_counts().index.values

in_first = set(senders.tolist())
in_second = set(receivers.tolist())

in_second_but_not_in_first = in_second - in_first
result = senders.tolist() + list(in_second_but_not_in_first)

linked_address = []
value_list = []

print("Reading in Transaction data ...")
print()

for i in result:
    v1, v2 = search_transaction(i,data)
    linked_address.append(i)
    value_list.append([v1,v2])

print("Fitting the Robust Covariance Estimation Curve ...")
print()

robust_cov = MinCovDet().fit(value_list)

v1 = []
v2 = []
for i in value_list:
    v1.append(i[0])
    v2.append(i[1])

print("Fitting complete!")
print()

fig = plt.figure()
subfig = plt.subplot(1,1,1)

inlier_plot = subfig.scatter(v1,v2)

xx, yy = np.meshgrid(np.linspace(plt.xlim()[0], plt.xlim()[1], 100),
                     np.linspace(plt.ylim()[0], plt.ylim()[1], 100))
zz = np.c_[xx.ravel(), yy.ravel()]

mahal_robust_cov = robust_cov.mahalanobis(zz)
mahal_robust_cov = mahal_robust_cov.reshape(xx.shape)
robust_contour = subfig.contour(xx, yy, np.sqrt(mahal_robust_cov),
                                 cmap=plt.cm.YlOrBr_r, linestyles='dotted')

plt.xticks(())
plt.yticks(())

plt.xlabel('Total BTC sent')
plt.ylabel('Total BTC received')

plt.show()

print("Building network...")
print()

connections = {}
num = []
for i in senders[3:4]:
    temp = []
    for k in range(len(data["Address Sender"])):
        if data["Address Sender"][k] == i:
            temp.append(data["Address Receiver"][k])
            num.append([i,data["Address Receiver"][k],data["Transaction_value"][k]])
    connections[i] = {value for value in temp}
    for k in temp:
        temp2 = []
        for p in range(len(data["Address Sender"])):
            if data["Address Sender"][p] == k:
                temp2.append(data["Address Receiver"][p])
                num.append([k,data["Address Receiver"][p],data["Transaction_value"][p]])
        connections[k] = {value for value in temp2}

print("Building Succeeds!")

G = nx.Graph(connections)
pos=nx.spring_layout(G)

colormap = []
for node in G:
    for k in num:
        if k[1] == i:
            if k[2] < 1:
                colormap.append('blue')
            elif k[2] > 20:
                colormap.append('red')
            else:
                colormap.append('green')


nx.draw(G, node_color = colormap, with_labels = True)
plt.show()
