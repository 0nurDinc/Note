document.addEventListener("DOMContentLoaded", function () {
   
    var colorListItems = document.querySelectorAll(".left-panel-body-color-list-item");

   
    colorListItems.forEach(function (item) {
        var randomColor = getRandomColor();
        item.style.backgroundColor = randomColor;
    });

    // Color Generation Functions
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});


$(document).ready(function(){
    
    //Opening and closing the menus on the left panel.

    $("#categoryBtn").click(function(){
        $("#categoryList").slideToggle("slow");
     });

     $("#tagBtn").click(function(){
        $("#tagList").slideToggle("slow");
     });

     $("#colorBtn").click(function(){
        $("#colorList").slideToggle("slow");
     });

     $("#trashBtn").click(function(){
        $("#trashList").slideToggle("slow");
     });

     //Filtering operations.

     $("#filtreInput").on("keyup", function() {
        var filtre = $(this).val().toLowerCase();
        $(".note-list-item").filter(function() {
            var noteTitle = $(this).find(".note-title").text().toLowerCase();
            var noteDescription = $(this).find(".note-description").text().toLowerCase();
            var topHeaderDetails = $(this).find(".top-header-details").text().toLowerCase();
            var noteDate = $(this).find(".note-date").text().toLowerCase();

            var match = noteTitle.indexOf(filtre) > -1 || noteDescription.indexOf(filtre) > -1 || topHeaderDetails.indexOf(filtre) > -1 || noteDate.indexOf(filtre) > -1;

            $(this).toggle(match);
        });
    });
     
  
       // Left menu opening and closing operations
       var menuClosed = false;

 
       $("#leftMenuBtn").click(function() {
           $("#x").animate({ width: menuClosed ? "18%" : "1%" });
           menuClosed = !menuClosed; // Reverse the situation.
   
           $("#y").slideToggle();
           $(".profile-image").slideToggle();
           $(".profile-title").slideToggle();
       });


       // Text alignment adjusted.
       $("#alignRightBtn").click(function() {
            $("#noteTextArea").css("text-align", "right");
        });


        $("#alignLeftBtn").click(function() {
            $("#noteTextArea").css("text-align", "left");
        });

    
        $("#alignCenterBtn").click(function() {
            $("#noteTextArea").css("text-align", "center");
        });

        //Adding Images

        $("#addContentImageBtn").click(function() {
  
            var imageUrl = prompt("Lütfen resim URL'sini girin:");
    
            if (imageUrl) {
                var image = $("<img>").attr("src", imageUrl).attr("alt", "Resim");
                $("#noteTextArea").append(image);
            }
           
        });

        //Adding Links

        $("#addContentLinkBtn").click(function() {

            var linkUrl = prompt("Lütfen bağlantı URL'sini girin:");
            var linkTitle = prompt("Lütfen bağlantının Başlığını Girini:");
           
    
            if (linkUrl) {
                var link = $("<a>").attr("href", linkUrl).text(linkTitle);
                $("#noteTextArea").append(link);
            }
        });


        //Printing operations.

        $("#printBtn").click(function() {

            var containerId = "noteTextArea";
            
            var content = $("#" + containerId).html();
            var printWindow = window.open('', '_blank');
            printWindow.document.write('<html><head><title>Print</title></head><body>' + content + '</body></html>');
            printWindow.document.close();
            printWindow.print();
        });
});

 //Text font has been adjusted.

function makeBold() {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var span = $('<span style="font-weight: bold;"></span>').html(range.toString());
    range.deleteContents();
    range.insertNode(span[0]);
}

function makeNormal() {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var span = $('<span style="font-weight: normal;"></span>').html(range.toString());
    range.deleteContents();
    range.insertNode(span[0]);
}

function underlineText() {
    document.execCommand("underline", false, null);
}


function makeItalic() {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var span = $('<span style="font-style: italic;"></span>').html(range.toString());
    range.deleteContents();
    range.insertNode(span[0]);
}
 


