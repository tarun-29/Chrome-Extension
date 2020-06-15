$(function () { 
    chrome.storage.sync.get(['limit','total'],function (budget) { 
        $('#total').text(budget.total)
        $('#limit').text(budget.limit)
     })
    $('#spendAmount').click(function () { 
        chrome.storage.sync.get('total',function (budget) { 
            var newTotal = 0
            if(budget.total){
                newTotal = newTotal + parseInt(budget.total)
            }
            var amount = $('#amount').val();
            if(amount){
                newTotal += parseInt(amount);
            }
            chrome.storage.sync.set({'total': newTotal})
            $('#total').text(newTotal)
            $('#amont').val('');
         })
     })
 })