    
if (document.addEventListener && document.querySelector) {


    document.addEventListener("DOMContentLoaded", function(){

        let sections = [
            circle = document.querySelector(".circle"),
            square = document.querySelector(".square"),
            triangle = document.querySelector(".triangle")
        ];

        const options = {
            root: null,
            threshold: 0.6,
            margin: "0"
        }

        let obsever = new IntersectionObserver(function(entries, observer){
            entries.forEach(function(entry){
                if (entry.isIntersecting) {
                    entry.target.classList.toggle("inverse");
                    observer.unobserve(entry.target);
                } 
            });
        }, options);

        sections.forEach(function (section){
            obsever.observe(section);

        });
    });
}


//check for width in sectons
//differenciate between section margin and item margin