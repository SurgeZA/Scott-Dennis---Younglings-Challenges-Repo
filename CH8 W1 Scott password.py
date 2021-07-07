

def password_check(user_password):

    numerics = "0123456789"
    capital_alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    special_chars = "#$!@"
    sum = 0
    x = 0
    y = 0
    z = 0
    while sum != 3:
        while len(user_password) != 6:
            user_password = input("/nPlease enter a correct password : ")

        for i in range(len(user_password)):
            if user_password[i] in numerics:
                x = 1
            elif user_password[i] in capital_alphabets:
                y = 1
            elif user_password[i] in special_chars:
                z = 1
        sum = x+y+z
        if sum != 3:
            user_password = input("/nPlease enter a valid password:")
        else:
            print("/nPassword accepted")
        return
