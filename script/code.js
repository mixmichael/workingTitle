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


function start() {
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
                alertify.alert(list[Math.floor(Math.random() * list.length)].printDes());
            } 
            else {
                alertify.set({
                    labels: {
                        ok: "אישור",
                        cancel: "כן"
                    }
                });
                alertify.alert(list[Math.floor(Math.random() * list.length)].printDes());
                alertify.set({
                    labels: {
                        ok: "לא",
                        cancel: "כן"
                    }
                });
            }
        });
        
    }




    var zicron = false,
        onlyIfBeer = false,
        tiredOfLa = false,
        drugsBeerPlay = false,
        onlyUnder5 = false;

    var place1 = new destination("לנדור", 3, false, true);
    var palce2 = new destination("לנדור", 3, false, true);
    var list = [place1];

    function destination(name, distance, hasCoffe, hasBear) {
        this.name = name;
        this.distance = distance;
        this.hasCoffe = hasCoffe;
        this.hasBear = hasBear;
        this.printDes = function () {
            return "שם:" + this.name + "</br> מרחק:" + this.distance + "</br>קפה:" + (this.hasCoffe ? "יש" : "אין") + "</br>בירה:" + (this.hasBear ? "יש" : "אין");
        }
    }