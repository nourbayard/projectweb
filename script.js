/*              dropdown              */
document.addEventListener("DOMContentLoaded", function () {
    function toggleCmdaMenu() {
        document.querySelector('.cmda-dropdown-menu ul').classList.toggle('show');
        document.querySelector('#cmda-dropdown-icon').classList.toggle('close-icon');
    }

    document.querySelector('#cmda-dropdown-icon').onclick = toggleCmdaMenu;
    document.querySelector('.cmda-dropdown-menu ul').onclick = toggleCmdaMenu;

});


/*                  like btns            */
    var section = document.querySelector('.int'); // first section element
    var button = document.querySelector('article > section > button');

    console.log(section);


    var changed = function(that) {
        var img = that.querySelector("img");

        if (img.getAttribute("src") == "like.png") {
            img.setAttribute("src", "liked.png");
        } else {
            img.setAttribute("src", "like.png");
        }
    }

    button.addEventListener('click', function() {
        changed(this);
    });

/*              more info       */
/*          show information section        */
    var deSectie1 = document.querySelector('.inf'); // first section element
    var button1 = document.querySelector('article > button:nth-of-type(1)');

    
    /*              niet aan komen          */
    var showings = function() {
        section.getElementsByClassName(".inf").style.display = "block";
    }
    
    /*          button events aanzetten     */
    button1.addEventListener('click', function() {
        deSectie1.classList.toggle("show");
    });
      