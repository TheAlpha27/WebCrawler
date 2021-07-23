let lin = document.links;
        console.log(lin);
        let arr = Array.from(lin);
        function search() {
            let list = document.getElementById("resUL");
            let linkCount = 0;
            list.innerHTML = "";
            let str = document.getElementById("inp").value;
            arr.forEach(function (element) {
                let link = element.href;
                if (link.includes(str)) {
                    list.innerHTML = list.innerHTML + "<li>" + link + "</li>";
                    console.log(link);
                    linkCount++;
                }
            });
            list.innerHTML = "<h2>" + "Total number of links found:"+ linkCount + "</h2>" + list.innerHTML;
            return true;
        }