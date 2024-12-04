document.addEventListener('DOMContentLoaded', function () {
    const ratio = .1
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: ratio
      }
   
      const handleIntersect = function (entries, observer){
        entries.forEach(function(entry){
            if(entry.intersectionRatio > ratio){
                entry.target.classList.add('reveal-visible2')
                observer.unobserve(entry.target)
            }
        })
      }
      
      const observer = new IntersectionObserver(handleIntersect, options)
      document.querySelectorAll('.reveal2').forEach(function(r){
        observer.observe(r)
      })

      
    })