import React from 'react'

export const FooterScreen = () => {
    return (
        <div id="footer" className="footer">
            <div className="footer-conteiner">
            <div className="footer-box" >
                <a 
                    title="facebook"  
                    target="_blank"
                    href="https://www.facebook.com/ale.lalli11"
                >
                    <img 
                        className="icon" 
                        src="http://assets.stickpng.com/thumbs/584ac2d03ac3a570f94a666d.png" 
                        alt="facebook" 
                    />
                </a>

                <a 
                    title="linkedin"  
                    target="_blank"
                    href="https://www.linkedin.com/in/alesandro-lalli-07b3211b2/"
                >
                    <img 
                        className="icon" 
                        src="http://assets.stickpng.com/images/58e91afdeb97430e81906504.png" 
                        alt="linkedin" 
                    />
                </a>

                <a 
                    title="instagram"  
                    target="_blank"
                    href="https://www.instagram.com/ale.lalli/"
                >
                    <img 
                        className="icon" 
                        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" 
                        alt="instagram" 
                    />
                </a>

            </div>
            <div className="footer-box" >
                <h3>341 349-3683</h3>
                <h3>Rosario, Argentina</h3>
                <h3>Lalli, Alesandro</h3>
            </div>

            </div>
        </div>
    )
}
