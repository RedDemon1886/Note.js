function getWeekName(day){
    day = day - 1;                 
    let days =[ 
        "Mon",
        "Tues",
        "Wend",
        "Thurs",
        "Fri",
        "Sat",
        "Sun"
    ];
    if(days[day]){
        return days[day];
    } else {
        throw "Chto-to";
    }
};
for(let i = 1; i<=8; i++){
    try {
        WeekdayName = getWeekName(i);      
    } catch(error){
        WeekdayName = "is havan't day";
        console.log(error)
    }
    console.log (WeekdayName);
}