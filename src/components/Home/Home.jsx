import React from 'react'
import home from './home.jpg'
import './Home.css'

export default function Home() {
    return (
        <div className="block">
            <div className="container1">
	<img src={home} alt="home"/>
    <div style={{marginLeft:'20px'}} className="info">
	<h1 className="title" style={{textTransform:'capitalize'}}>Learn coding
    
    </h1>
    <h4 >OPENING A DOOR TO THE FUTURE</h4>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic magni consectetur, dolores velit obcaecati tempore repellat inventore impedit beatae fuga soluta ea repudiandae praesentium veritatis dicta doloribus aspernatur neque voluptate!</p>
    </div>  
</div>
<div className="container2">
	<img src={home} alt="home"/>
	<div style={{marginRight:'20px'}} className="info">
	<h1 className="title" style={{textTransform:'capitalize'}}>Mastering the language    
    </h1>
    <h4 >JAVA IS NOT THE SAME AS JAVASCRIPT</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aut fugiat fuga aspernatur non id maiores cum minima vitae repellendus inventore, adipisci culpa. Aliquam facilis adipisci quaerat animi ipsam voluptas!</p>
    </div>  
</div>
        </div>
    )
}
