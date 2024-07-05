const dollar = document.getElementById('dollar');
const dollarPrice = document.getElementById('dollar_price')

const item = document.getElementById('item')
const itemPrice = document.getElementById('item_price')

const check = document.getElementById('check')
const checkPrice = document.getElementById('check_price')

const leads = document.getElementById('leads')
const amountLeads = document.getElementById('amount_leads')

const sales = document.getElementById('sales')
const salesPrice = document.getElementById('sales_price')

const approve = document.getElementById('approve')
const approvePercent = document.getElementById('approve_percent')

const callCenter = document.getElementById('callcenter')
const income = document.getElementById('income')

const cleanPrice = document.getElementById('cleanprice')
const priceWithCheck = document.getElementById('checkprice')
priceWithCheck.innerHTML='hoi'


// const salesValue = parseFloat(sales.value);
// const leadsValue = parseFloat(leads.value)

// const getCallPrice = (salesValue/leadsValue)*0.17 + 14;


const btn = document.getElementById('button');

btn.addEventListener('click',()=>{

    const checkValue = parseFloat(check.value);
    const itemValue = parseFloat(item.value);
    const dollarValue = parseFloat(dollar.value);
    const leadsValue = parseFloat(leads.value);
    const salesValue = parseFloat(sales.value);
    const approveValue = parseFloat(approve.value)

    const getCallPrice = ((salesValue/leadsValue)*0.17 + 14).toFixed(2);
    // const getTwentyFive = +((checkValue-getCallPrice)*75)/100;
    const getIncome = +((((checkValue-getCallPrice)*75)/100)-25).toFixed(2);
    const cleanPriceSum = ((((itemValue*75)/100)-25)).toFixed(2);
    const getCleanPriceSum = (((cleanPriceSum*approveValue)/100)/dollarValue).toFixed(2)
    const getPriceWithCheck = (getIncome/dollarValue).toFixed(2)
   
    
    checkPrice.innerHTML = 'маржа товара:' + check.value + 'грн';
    itemPrice.innerHTML = 'средний чек:' + item.value + 'грн';
    dollarPrice.innerHTML = 'цена доллара:' + dollar.value + 'грн';
    amountLeads.innerHTML = 'кол-во лидов' + leads.value;
    salesPrice.innerHTML = 'сумма допродажи' + sales.value + 'грн';
    callCenter.innerHTML = 'цена кц:' + getCallPrice + 'грн';
    income.innerHTML = 'доход(75%-кц-возврат):' + getIncome + 'грн';
    approvePercent.innerHTML = 'апрув:' + approveValue + '%';
    cleanPrice.innerHTML = getCleanPriceSum + '$';
    priceWithCheck.innerHTML = getPriceWithCheck + '$';
})