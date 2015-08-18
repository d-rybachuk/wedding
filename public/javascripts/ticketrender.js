window.onload = function(){
  html2canvas(document.getElementById("ticket"), {
    onrendered: function(canvas) {
      var ticket = document.getElementById("ticket");
      var printTicket = document.createElement("div").appendChild(canvas);
      ticket.parentNode.replaceChild(printTicket, ticket);
    }
  });
}

