import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

def reading(path):

    txID = []
    addID = []
    value = []

    with open(path) as infile:
        for k in range(30000000):
            if k < 29900000:
                continue
            line = infile.readline()
            l = line.strip().split('\t')
            if l[-1] == '5000000000':
                continue
            txID.append(l[0])
            addID.append(l[1:-1][0])
            value.append(l[-1])

    return txID,addID,value

def export_full_history():

    txID, addID, value = reading("/Users/kevin/downloads/bitcoin_dataset/txout.txt")
    tx_inID, add_inID, value_in = reading("/Users/kevin/downloads/bitcoin_dataset/txin.txt")

    value = list(map(int,value))
    value_in = list(map(int,value))

    for i in range(len(value)):
        value[i] = value[i] / 100000000

    for i in range(len(value_in)):
        value_in[i] = value_in[i] / 100000000

    address = list(map(int,addID))
    address_in = list(map(int,add_inID))

    combined = []
    for i in range(len(address)):
        combined.append([address[i],value[i]])

    Transaction_his_out = list(map(int,txID))
    Transaction_his_in = list(map(int,tx_inID))

    full_transaction_hist = []
    for i in range(min(Transaction_his_in),max(Transaction_his_out)):
        if i in Transaction_his_in and i in Transaction_his_out:
            in_index = Transaction_his_in.index(i)
            out_index = Transaction_his_out.index(i)
            transaction_value = value_in[in_index]
            address_sender = address_in[in_index]
            address_receiver = address[out_index]
            while Transaction_his_out[out_index + 1] == i:
                transaction_value += value[out_index + 1]
                if not address[out_index + 1] == address_sender:
                    address_receiver = address[out_index + 1]
                out_index += 1
            full_transaction_hist.append([address_sender,address_receiver,transaction_value])

    pd.DataFrame(full_transaction_hist,columns=['Address Sender','Address Receiver','Transaction_value']).to_csv("/Users/kevin/desktop/Github/Bitcoin-Fraud-Detection/full_hist.csv")
