import './style.css'

import whoobe from './src/whoobe.js'
import gsapEffects from './src/animations.js'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin ( ScrollTrigger )
const plugins = [ScrollTrigger]
document.body.innerHTML = whoobe.html

var head = document.head;
var link = document.createElement("link");

link.type = "text/css";
link.rel = "stylesheet";
link.href = 'https://fonts.googleapis.com/css?family=' + whoobe.fonts.join('|')
head.appendChild ( link )
console.log ( whoobe )
if ( whoobe.tags ){
    try {
        var keywords = document.createElement('meta');
        keywords.name = 'keywords'
        keywords.setAttribute('content',whoobe.tags)
        head.appendChild ( keywords )
    } catch (err){
        console.log ( err )
    }
}
if ( whoobe.animations ){
    whoobe.animations.forEach ( element => {
        let el = document.querySelector('#' + element.id )
        console.log ( element )
        let ani = gsap.effects[element.gsap.animation]( el ,{
            trigger: el,
            duration: parseFloat(element.gsap.duration),
            delay: parseFloat(element.gsap.delay),
            ease: element.gsap.ease
        })
        ScrollTrigger.create({
            id: element.id,
            start: "top 99.99%",
            trigger: el,
            toggleActions: "play pause restart none",
            animation:ani,
            onEnter: ()=>{ 
                if ( element.gsap.delay ){
                    ani.play()
                } else {
                    ani.play(0)
                }
            },
            
        });
    })
}



try {
    document.title = whoobe.title 
} catch ( err ){
    console.log ( err )
}
try {
    var meta = document.createElement('meta');
    meta.name = 'description'
    meta.setAttribute('content',whoobe.description)
    head.appendChild ( meta )
} catch ( err ){
    console.log ( err )
}
