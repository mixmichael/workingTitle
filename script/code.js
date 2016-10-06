//אנימציה פתיחה של הדף
$(document).ready(function () {
    alertify.set({
        labels: {
            ok: "לא",
            cancel: "כן"
        }
    });
    $("#box").hide();
    $("#box").fadeIn("slow");
});



//פונקציה לזמן לחיצה על הכפתור
function start() {

    //בודק איזה כפתורים (chcekbox) לחוצים
    if ($("#onlyIfBeer").is(':checked')) {
        onlyIfBeer = true;
    }
    if ($("#drugsBeer").is(':checked')) {
        drugsBeerPlay = true;
    }
    if ($("#zicron").is(':checked')) {
        zicron = true;
    }
    if ($("#tierdOfLan").is(':checked')) {
        tiredOfLa = true;
    }



    alertify.set({labels:{ok:"לא",cancel:"כן"}});
    alertify.confirm("האם הלל הנהג?", function (e, str) {
            if (!e) {
                onlyUnder5 = true;
                alertify.set({labels: {ok: "תודה לאל",cancel: "כן"}});
                alertify.alert("בוטלו נסיעות מעל 5 קילומוטר למען בטיחות הנוסעים");
                alertify.set(
                    {
                    labels: {
                        ok: "אישור",
                        cancel: "כן"}});
                alertify.alert(randomChoose().printDes());
            } 
            else {
                alertify.set({
                    labels: {
                        ok: "אישור",
                        cancel: "כן"
                    }
                });
                alertify.alert(randomChoose().printDes());
                alertify.set({
                    labels: {
                        ok: "לא",
                        cancel: "כן"
                    }
                });
            }
        });
        
    }



//רשימה של "יעדים אפשרים" א
    var place1 = new destination("לנדוור", 3, false, true,false);
    var palce2 = new destination("לנדוור", 3, false, true,false);
    var list = [place1];

//הגדרת האוביקט לצורך יעד
    function destination(name, distance, hasCoffe, hasBear,zicronn) {
        this.name = name;
        this.distance = distance;
        this.hasBear = hasBear;
        this.zicron = zicronn;
        this.printDes = function () {
            return "שם:" + this.name + "</br> מרחק:" + this.distance + "</br>קפה:" + (this.hasCoffe ? "יש" : "אין") + "</br>בירה:" + (this.hasBear ? "יש" : "אין");
        }
    }
    function randomChoose()
    {
        found = false
        while(!found)
        {
            var temp = list[Math.floor(Math.random() * list.length)];
            if(
                ((onlyIfBeer && temp.hasBear)|| !onlyIfBeer) &&
                ((temp.zicron && zicron) || !zicron) &&
                ((tiredOfLa && temp.name != "לנדוור") ||(!tiredOfLa)) &&
                ((!onlyUnder5)||(onlyUnder5 && temp.distance <= 5)) &&
                ((!drugsBeerPlay) || (drugsBeerPlay && temp.name == "on"))
            )
            {
                found = true;
            }
        }
        return temp;
    }

//משתנים למעקב אחרי צורת הסינון
    var zicron = false,
        onlyIfBeer = false,
        tiredOfLa = false,
        drugsBeerPlay = false,
        onlyUnder5 = false;


