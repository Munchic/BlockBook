def search_transaction(address,data):
    transaction_out = []
    value_out = 0
    transaction_in = []
    value_in = 0
    for i in range(len(data["Address Sender"])):
        if data["Address Sender"][i] == address:
            value_out += data["Transaction_value"][i]
        elif data["Address Receiver"][i] == address:
            value_in += data["Transaction_value"][i]

    return value_in, value_out
