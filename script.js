/*Создайте объект bankAccount, представляющий банковский счет с свойствами:

accountNumber для номера счета;
accountHolderName для имени владельца счета;
balance для баланса.
deposit для описания действия по добавлению денег на счёт;
withdraw для описания действия по снятию денег со счёта;
checkBalance для проверки баланса. */
const bankAccount = {
    accountNumber: '',
    accountHolderName: '',
    balance: 0,
    deposit: function (deposit) { // для описания действия по добавлению денег на счёт;
        this.balance += deposit;
        return 'new balance: ' + this.balance;
    },

    withdraw: (withdrawal) =>  // для описания действия по снятию денег со счёта;
     bankAccount.balance -= withdrawal
        , 
    checkBalance: () =>        // для проверки баланса. 
         'balance: ' + this.balance
     
}

console.log(bankAccount.deposit(1000));
console.log(bankAccount.withdraw(1000));
console.log(bankAccount.checkBalance());




