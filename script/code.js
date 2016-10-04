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
    alertify.confirm("האם הלל הנהג?", function (e, str) {
                if (!e) {
                    alertify.set({
                            labels: {
                                ok: "תודה לאל",
                                cancel: "כן"
                            }});

                            alertify.alert("בוטלו נסיעות מעל 5 קילומוטר למען בטיחות הנוסעים");
                                  alertify.set({
                            labels: {
                                ok: "לא",
                                cancel: "כן"
                            }});

                        }
                        else {
                            alertify.set({
                            labels: {
                                ok: "אישור",
                                cancel: "כן"
                            }});
                            alertify.alert(list[Math.floor(Math.random()*list.length)].printDes());
                    alertify.set({
                            labels: {
                                ok: "לא",
                                cancel: "כן"
                            }});    
                    }
                    });
            }
            var place1 = new destination("לנדור",3,false,true),palce2 = new destination("לנדור",3,false,true);
            var list = [place1];
            function destination(name, distance, hasCoffe, hasBear)
            {
                this.name = name;
                this.distance = distance;
                this.hasCoffe = hasCoffe;
                this.hasBear = hasBear;
                this.printDes = function()
                {
                    return "שם:" + this.name + "</br> מרחק:" + this.distance + "</br>קפה:" + (this.hasCoffe ? "יש":"אין") + "</br>בירה:"+(this.hasBear ? "יש":"אין");
                }
            }
            