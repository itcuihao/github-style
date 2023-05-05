function enableStickyToc() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                if (delay == true) {
                    let element = document.querySelector('.sticky-toc li.active')
                    element.firstChild.classList.remove(textColor);
                    element.classList.remove('active');
                    delay = false;
                    updatePosAndColor();
                }
                let element = document.querySelector(`.sticky-toc li a[href="#${id}"]`)
                if (element) {
                    element.parentElement.classList.add('active');
                    updatePosAndColor();
                }
            } else {
                if (document.querySelectorAll('.sticky-toc li.active').length == 1) {
                    delay = true;
                } else {
                    let element = document.querySelector(`.sticky-toc li a[href="#${id}"]`)
                    if (element) {
                        element.classList.remove(textColor);
                        element.parentElement.classList.remove('active');
                        updatePosAndColor();
                    }
                }
            }
        });
    });

    var delay = false;
    var targetPos = window.innerHeight * 0.4
    var textColor = 'text-eureka'

    function updatePosAndColor() {
        let elements = document.querySelectorAll('.sticky-toc li.active')
        let len = elements.length
        if (len != 0) {
            let firstElement = elements[0]
            firstElement.firstChild.classList.add(textColor)
            let offset = firstElement.offsetTop - targetPos;
            if (offset > 0) {
                document.querySelector(`.sticky-toc`).style.top = `calc( 8rem - ${offset}px)`
            } else {
                document.querySelector(`.sticky-toc`).removeAttribute("style");
            }
            for (let i = 1; i < len; i++) {
                elements[i].firstChild.classList.remove(textColor)
            }
        }
    }

    // Track all sections that have an `id` applied
    document.querySelectorAll('.prose h1[id]').forEach((section) => {
        observer.observe(section);
    });
    document.querySelectorAll('.prose h2[id]').forEach((section) => {
        observer.observe(section);
    });
    document.querySelectorAll('.prose h3[id]').forEach((section) => {
        observer.observe(section);
    });
    document.querySelectorAll('.prose h4[id]').forEach((section) => {
        observer.observe(section);
    });
    document.querySelectorAll('.prose h5[id]').forEach((section) => {
        observer.observe(section);
    });
    document.querySelectorAll('.prose h6[id]').forEach((section) => {
        observer.observe(section);
    });
}
