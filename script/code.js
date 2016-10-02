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
                            alertify.alert(list[Math.floor(Math.random()*list.length)]);
                    alertify.set({
                            labels: {
                                ok: "לא",
                                cancel: "כן"
                            }});    
                    }
                    });
            }
            var list = ["מקום1", "מקום 2", "מקום 3"];
            