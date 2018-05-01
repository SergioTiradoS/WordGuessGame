var hangman = {
    vCorrectArray : [],
    vPassedArray : [],
    vTempArray : [],
    vCurrentWord : "",
    vErrors:0,
    vWins:0,
    vLoses:0,
    vAlphabet :["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],

    //Show a new hang pole
    showHangmanDrawing: function(pObject, pOrder) {
        if((typeof(pObject) != 'undefined' && pObject != null) && (typeof(pOrder) != 'undefined' && pOrder != null)){
            if(!isNaN(pOrder)){
                if(pOrder==0){
                    var vObject = document.getElementById(pObject);
                    vObject.innerHTML =`
                            <div name="1" class="row">
                                    <div class="col-xs-12">
                                        <img src="assets/images/1.png" alt="">
                                    </div>
                            </div> 
                            <div name="2" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/2-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div>
                            <div name="3" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div> 
                            <div name="4" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div>
                            <div name="5" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                        <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div> 
                            <div name="6" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div>
                            <div name="7" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div> 
                            <div name="8" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div>
                            <div name="9" class="row">
                                    <div class="col-xs-12">
                                            <img src="assets/images/9.png" alt="">
                                    </div>
                            </div>
                    `;
                }else if(pOrder==1){
                    var vObject = document.getElementById(pObject);
                    vObject.innerHTML =`
                            <div name="1" class="row">
                                    <div class="col-xs-12">
                                        <img src="assets/images/1.png" alt="">
                                    </div>
                            </div> 
                            <div name="2" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/2-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div>
                            <div name="3" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div> 
                            <div name="4" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div>
                            <div name="5" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                        <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div> 
                            <div name="6" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div>
                            <div name="7" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div> 
                            <div name="8" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-4.png" alt="">
                                    </div>
                            </div>
                            <div name="9" class="row">
                                    <div class="col-xs-12">
                                            <img src="assets/images/9.png" alt="">
                                    </div>
                            </div>
                    `;
                }else if(pOrder==2){
                    var vObject = document.getElementById(pObject);
                    vObject.innerHTML =`
                            <div name="1" class="row">
                                    <div class="col-xs-12">
                                        <img src="assets/images/1.png" alt="">
                                    </div>
                            </div> 
                            <div name="2" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/2-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div>
                            <div name="3" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div> 
                            <div name="4" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div>
                            <div name="5" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                        <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div> 
                            <div name="6" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div>
                            <div name="7" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div> 
                            <div name="8" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-4.png" alt="">
                                    </div>
                            </div>
                            <div name="9" class="row">
                                    <div class="col-xs-12">
                                            <img src="assets/images/9.png" alt="">
                                    </div>
                            </div>
                    `;                    
                }else if(pOrder==3){
                    var vObject = document.getElementById(pObject);
                    vObject.innerHTML =`
                            <div name="1" class="row">
                                    <div class="col-xs-12">
                                        <img src="assets/images/1.png" alt="">
                                    </div>
                            </div> 
                            <div name="2" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/2-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div>
                            <div name="3" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div> 
                            <div name="4" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div>
                            <div name="5" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                        <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div> 
                            <div name="6" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div>
                            <div name="7" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-4.png" alt="">
                                    </div>
                            </div> 
                            <div name="8" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-4.png" alt="">
                                    </div>
                            </div>
                            <div name="9" class="row">
                                    <div class="col-xs-12">
                                            <img src="assets/images/9.png" alt="">
                                    </div>
                            </div>
                    `;                     
                }else if(pOrder==4){
                    var vObject = document.getElementById(pObject);
                    vObject.innerHTML =`
                            <div name="1" class="row">
                                    <div class="col-xs-12">
                                        <img src="assets/images/1.png" alt="">
                                    </div>
                            </div> 
                            <div name="2" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/2-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div>
                            <div name="3" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div> 
                            <div name="4" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div>
                            <div name="5" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                        <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div> 
                            <div name="6" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div>
                            <div name="7" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-4.png" alt="">
                                    </div>
                            </div> 
                            <div name="8" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-4.png" alt="">
                                    </div>
                            </div>
                            <div name="9" class="row">
                                    <div class="col-xs-12">
                                            <img src="assets/images/9.png" alt="">
                                    </div>
                            </div>
                    `;                      
                }else if(pOrder==5){
                    var vObject = document.getElementById(pObject);
                    vObject.innerHTML =`
                            <div name="1" class="row">
                                    <div class="col-xs-12">
                                        <img src="assets/images/1.png" alt="">
                                    </div>
                            </div> 
                            <div name="2" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/2-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div>
                            <div name="3" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div> 
                            <div name="4" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div>
                            <div name="5" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                        <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div> 
                            <div name="6" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-4.png" alt="">
                                    </div>
                            </div>
                            <div name="7" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-4.png" alt="">
                                    </div>
                            </div> 
                            <div name="8" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-4.png" alt="">
                                    </div>
                            </div>
                            <div name="9" class="row">
                                    <div class="col-xs-12">
                                            <img src="assets/images/9.png" alt="">
                                    </div>
                            </div>
                    `;                    
                }else if(pOrder==6){
                    var vObject = document.getElementById(pObject);
                    vObject.innerHTML =`
                            <div name="1" class="row">
                                    <div class="col-xs-12">
                                        <img src="assets/images/1.png" alt="">
                                    </div>
                            </div> 
                            <div name="2" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/2-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div>
                            <div name="3" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div> 
                            <div name="4" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div>
                            <div name="5" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                        <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div> 
                            <div name="6" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-4.png" alt="">
                                    </div>
                            </div>
                            <div name="7" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-4.png" alt="">
                                    </div>
                            </div> 
                            <div name="8" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-4.png" alt="">
                                    </div>
                            </div>
                            <div name="9" class="row">
                                    <div class="col-xs-12">
                                            <img src="assets/images/9.png" alt="">
                                    </div>
                            </div>
                    `;                     
                }else if(pOrder==7){
                    var vObject = document.getElementById(pObject);
                    vObject.innerHTML =`
                            <div name="1" class="row">
                                    <div class="col-xs-12">
                                        <img src="assets/images/1.png" alt="">
                                    </div>
                            </div> 
                            <div name="2" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/2-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div>
                            <div name="3" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div> 
                            <div name="4" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div>
                            <div name="5" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-3.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div> 
                            <div name="6" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-4.png" alt="">
                                    </div>
                            </div>
                            <div name="7" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-4.png" alt="">
                                    </div>
                            </div> 
                            <div name="8" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-4.png" alt="">
                                    </div>
                            </div>
                            <div name="9" class="row">
                                    <div class="col-xs-12">
                                            <img src="assets/images/9.png" alt="">
                                    </div>
                            </div>
                    `;                     
                }else if(pOrder==8){
                    var vObject = document.getElementById(pObject);
                    vObject.innerHTML =`
                            <div name="1" class="row">
                                    <div class="col-xs-12">
                                        <img src="assets/images/1.png" alt="">
                                    </div>
                            </div> 
                            <div name="2" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/2-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div>
                            <div name="3" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div> 
                            <div name="4" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-3.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div>
                            <div name="5" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-3.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div> 
                            <div name="6" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-4.png" alt="">
                                    </div>
                            </div>
                            <div name="7" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-4.png" alt="">
                                    </div>
                            </div> 
                            <div name="8" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-4.png" alt="">
                                    </div>
                            </div>
                            <div name="9" class="row">
                                    <div class="col-xs-12">
                                            <img src="assets/images/9.png" alt="">
                                    </div>
                            </div>
                    `;                    
                }else if(pOrder==9){
                    var vObject = document.getElementById(pObject);
                    vObject.innerHTML =`
                            <div name="1" class="row">
                                    <div class="col-xs-12">
                                        <img src="assets/images/1.png" alt="">
                                    </div>
                            </div> 
                            <div name="2" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/2-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div>
                            <div name="3" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div> 
                            <div name="4" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-3.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-4.png" alt="">
                                    </div>
                            </div>
                            <div name="5" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-3.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div> 
                            <div name="6" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-4.png" alt="">
                                    </div>
                            </div>
                            <div name="7" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-4.png" alt="">
                                    </div>
                            </div> 
                            <div name="8" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-4.png" alt="">
                                    </div>
                            </div>
                            <div name="9" class="row">
                                    <div class="col-xs-12">
                                            <img src="assets/images/9.png" alt="">
                                    </div>
                            </div>
                    `;                     
                }else if(pOrder==10){
                    var vObject = document.getElementById(pObject);
                    vObject.innerHTML =`
                            <div name="1" class="row">
                                    <div class="col-xs-12">
                                        <img src="assets/images/1.png" alt="">
                                    </div>
                            </div> 
                            <div name="2" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/2-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div>
                            <div name="3" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                            </div> 
                            <div name="4" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-3.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-4.png" alt="">
                                    </div>
                            </div>
                            <div name="5" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-3.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div> 
                            <div name="6" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-4.png" alt="">
                                    </div>
                            </div>
                            <div name="7" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-4.png" alt="">
                                    </div>
                            </div> 
                            <div name="8" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-4.png" alt="">
                                    </div>
                            </div>
                            <div name="9" class="row">
                                    <div class="col-xs-12">
                                            <img src="assets/images/9.png" alt="">
                                    </div>
                            </div>
                    `;                        
                }else if(pOrder==11){
                    var vObject = document.getElementById(pObject);
                    vObject.innerHTML =`
                            <div name="1" class="row">
                                    <div class="col-xs-12">
                                        <img src="assets/images/1.png" alt="">
                                    </div>
                            </div> 
                            <div name="2" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/2-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div>
                            <div name="3" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-4.png" alt="">
                                    </div>
                            </div> 
                            <div name="4" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-3.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-4.png" alt="">
                                    </div>
                            </div>
                            <div name="5" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-3.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div> 
                            <div name="6" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-4.png" alt="">
                                    </div>
                            </div>
                            <div name="7" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-4.png" alt="">
                                    </div>
                            </div> 
                            <div name="8" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-4.png" alt="">
                                    </div>
                            </div>
                            <div name="9" class="row">
                                    <div class="col-xs-12">
                                            <img src="assets/images/9.png" alt="">
                                    </div>
                            </div>
                    `;                      
                }else if(pOrder==12){
                    var vObject = document.getElementById(pObject);
                    vObject.innerHTML =`
                            <div name="1" class="row">
                                    <div class="col-xs-12">
                                        <img src="assets/images/1.png" alt="">
                                    </div>
                            </div> 
                            <div name="2" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/2-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div>
                            <div name="3" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-3.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-4.png" alt="">
                                    </div>
                            </div> 
                            <div name="4" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-3.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-4.png" alt="">
                                    </div>
                            </div>
                            <div name="5" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-3.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div> 
                            <div name="6" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-4.png" alt="">
                                    </div>
                            </div>
                            <div name="7" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-4.png" alt="">
                                    </div>
                            </div> 
                            <div name="8" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-4.png" alt="">
                                    </div>
                            </div>
                            <div name="9" class="row">
                                    <div class="col-xs-12">
                                            <img src="assets/images/9.png" alt="">
                                    </div>
                            </div>
                    `;                      
                }else if(pOrder==13){
                    var vObject = document.getElementById(pObject);
                    vObject.innerHTML =`
                            <div name="1" class="row">
                                    <div class="col-xs-12">
                                        <img src="assets/images/1.png" alt="">
                                    </div>
                            </div> 
                            <div name="2" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/2-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div>
                            <div name="3" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-3.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-4.png" alt="">
                                    </div>
                            </div> 
                            <div name="4" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-3.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-4.png" alt="">
                                    </div>
                            </div>
                            <div name="5" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-3.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div> 
                            <div name="6" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-4.png" alt="">
                                    </div>
                            </div>
                            <div name="7" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-4.png" alt="">
                                    </div>
                            </div> 
                            <div name="8" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-4.png" alt="">
                                    </div>
                            </div>
                            <div name="9" class="row">
                                    <div class="col-xs-12">
                                            <img src="assets/images/9.png" alt="">
                                    </div>
                            </div>
                    `;                       
                }else if(pOrder==14){
                    var vObject = document.getElementById(pObject);
                    vObject.innerHTML =`
                            <div name="1" class="row">
                                    <div class="col-xs-12">
                                        <img src="assets/images/1.png" alt="">
                                    </div>
                            </div> 
                            <div name="2" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/2-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/2-3.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div>
                            <div name="3" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-3.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/3-4.png" alt="">
                                    </div>
                            </div> 
                            <div name="4" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-3.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/4-4.png" alt="">
                                    </div>
                            </div>
                            <div name="5" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/5-3.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                        
                                    </div>
                            </div> 
                            <div name="6" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/6-4.png" alt="">
                                    </div>
                            </div>
                            <div name="7" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/blank.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/7-4.png" alt="">
                                    </div>
                            </div> 
                            <div name="8" class="row">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-1.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-2.png" alt="">
                                    </div>
                                    <div class="col-xs-3 center-block"></div>
                                            <img src="assets/images/blank.png" alt="">
                                    <div class="col-xs-3 center-block">
                                            <img src="assets/images/8-4.png" alt="">
                                    </div>
                            </div>
                            <div name="9" class="row">
                                    <div class="col-xs-12">
                                            <img src="assets/images/9.png" alt="">
                                    </div>
                            </div>
                    `;                       
                }

            }else{
                console.log("Error in function setNewHangmanDraw: Order is not a number.(2ndIF)")       
            }
        
        }else{
            console.log("Error in function setNewHangmanDraw: Variables undefined or null.(1stIF)")
        }
        return true;
    },

    //Get a new word
    getNewWord: function(){
        var vDictionary = ["abided","aceric","acerval","acidly","acomia","acridid","adicea","adynamy","aegina","aerogen","afters","agnatic","agpaite","akebia","alated","albany","alfaqui","aliased","alicant","alicula","alimony","alinit","alkoxyl","allodia","allonge","almagra","aloins","alphyls","amatols","ambigu","amines","andrite","animato","anlases","antical","antihum","apehood","aphizog","approx","apritif","archeol","archons","ariadne","aryans","aseethe","assert","assize","attain","atumble","avenida","avogram","avulses","baboon","baboons","backing","ballata","bandgap","bangup","barbion","barlock","barming","barnage","basker","batara","bathyl","beadrow","beaker","becher","beckon","bedene","bedford","befame","beleve","bellite","benempt","berapt","bernard","bestuck","bethumb","bewreck","biding","bimana","bimong","bindery","binmen","biodyne","biteche","bizonal","blanque","blarney","blurter","bobwood","bogway","bolted","bonjour","booster","boregat","boreism","boskage","boxtops","bractea","bramia","brassie","brazil","breath","brevit","briard","bristle","brocard","brogued","buddhic","bufidin","bugger","bulbuls","bultong","bungee","bunions","burble","burgau","burgees","burghs","burton","buzuki","byward","bywoner","caches","cacimbo","cadbait","caitiff","calgon","calista","calotin","campine","campman","campody","canion","caproin","capsize","carles","carton","casebox","casper","cassoon","catchup","caudad","cavated","celsia","cephala","ceratin","certif","cervine","chaffed","chalaza","chalky","charvet","chattah","chaufer","chauvin","cherub","chiefer","chinky","chintz","choses","churly","cicadid","ciliate","cirrose","clachan","clayen","coaled","cochins","coeliac","cogger","cohort","coiffes","colmose","colove","comtian","conger","coning","conjure","cooner","coppra","coprose","corrump","cortine","corton","coster","courap","cowbind","cowgate","cowpats","coxier","crazes","crinel","crissal","critch","crocks","crowtoe","crumper","crunode","cubbyu","cucking","cuiejo","cummock","cunonia","cuprite","curaris","curiam","cushaws","cyclope","dairous","damager","damnit","damozel","daresay","debtors","decenyl","declass","defaces","defiled","degage","delilah","demidog","depair","deputed","derride","dertra","despeed","devilet","dewily","dewlap","diasyrm","dibbler","dickens","digenic","dihalo","dilemi","dinars","dinetic","diotic","dipnoid","dipsie","dismals","disowns","dispell","disship","divinyl","docile","docious","dodkin","doggery","dogtrot","dollars","dollops","doorway","dormant","dossier","dottles","doweled","dressed","dryers","dryops","duckpin","dudler","dumpoke","dustily","dyeing","dynodes","effendi","eggers","elative","elkhorn","embryon","emceing","emerick","encysts","enfaced","ensaint","ensurer","enzymic","epacme","epicure","epigone","epimyth","erected","escopet","escrod","escuela","ethenic","eutaxic","evomit","exalted","example","exiler","exiting","expends","exudate","exuviae","eyelet","faailk","fagelia","falbelo","falcula","fallout","fascili","fatwood","fayence","febrile","feretra","ferfet","ferrary","ferrets","ferrum","ficelle","figboy","figgle","filmish","fiscal","flavins","fliers","flosser","fluoric","fluster","flutist","flyleaf","fondak","forthy","fossae","fraunch","fregata","froisse","frokin","frouze","fungia","fustin","futural","gadids","gahnite","galcha","galenic","gallein","gallnut","gambler","gaudery","gaulsh","gemless","gemlike","genion","gentoo","gibsons","gigget","gitoxin","gittern","gleeful","gloater","globus","glomus","glummy","gnostic","gocart","gomavel","gosplan","grager","grantha","grapple","greeney","greenth","gridded","grocers","gruffer","guaque","guesses","guiser","gulash","gusted","gyrene","habits","hackery","hackly","hadean","hadjees","hairlet","hairof","haiver","halvas","harbors","haughty","haulers","haustus","heinie","helonin","henpen","hernias","heteric","hexacid","hillmen","hindoo","hiplike","hobbies","hodmen","hohokam","holiest","homoean","homonym","horreum","hostel","hounce","hubber","huchnom","hussies","icemen","iconize","ideata","ideated","illing","illness","impedes","impery","impious","implode","imposes","inculp","incused","indwelt","inflood","inhered","innyard","inspect","ionomer","isoptic","isoxime","israeli","jambeau","janders","jangler","jerrids","jerrie","jivaro","jnanas","jockey","jornada","juggles","jugums","jupati","jussel","kahunas","kammina","kareeta","kartos","kelping","kenotic","ketotic","kharia","khatin","kiltie","kindred","kinhin","kirtled","kirtles","knavery","knaves","konini","korero","krubuts","kuruma","lamany","lanific","lappets","larries","lather","lauroyl","laweour","leaper","leering","legifer","lemogra","lemures","lentile","levins","lexical","libbet","lichens","limital","listel","lobbies","looeys","lopers","lordlet","lounder","luciana","lurdane","lychnic","maculae","maduro","maguari","malays","malling","mallus","maneges","marques","marrys","martial","masonry","matlow","matweed","meatman","medusae","menfra","menial","meowing","mestino","mexitl","midnoon","milling","misseat","mitanni","mohalim","moisten","mollusk","moping","morate","morcha","morgens","morglay","morose","morrice","muesli","muezzin","munchy","munguba","muskie","musrol","mussed","mutches","mutule","muzzily","myrcia","myrrhis","naevus","naither","naives","natant","natrons","nayarit","neaped","necesse","negaton","neocene","nerver","nerves","nervily","nettled","nichts","nidget","nidify","nighter","noblify","nodders","nonacid","norroy","nosier","nuagism","nuclei","numbed","nutgall","nuzzled","oatland","oberon","obtains","odinism","offload","oilbird","okuari","oleates","omnify","ooplast","opelet","opposer","opsonin","orillon","orthic","orwell","osmolar","otarian","otidine","ouranos","outacts","outdrew","outface","outlast","outwove","ozonize","padlock","pakchoi","palatic","pallies","papize","parley","parotis","passen","patefy","pawkily","pealer","pehlevi","pelota","penible","perfix","perform","perjink","perlite","pewmate","phased","phellum","phiale","phillis","philome","phippe","piculet","pigsney","pilapil","pintail","piprine","pisces","pitmark","plaque","plasome","platch","playact","plumber","poisons","polynee","pomato","pomeys","pontify","portato","potager","pouches","prabhu","precool","premake","premune","presift","pretors","prologs","prosed","protyls","psiloi","psovie","puccini","pulahan","purlman","pusley","putlock","pythios","quarry","quartes","querele","rabbity","rablin","radium","raffee","ragging","raggles","raiidae","raising","random","rastus","ratfish","rattage","razzle","realise","rebate","rebred","rebulk","recency","reduces","reedily","reefers","reflair","reflex","regilds","relume","remoras","repacks","replane","rerate","resids","reslide","resshot","reswell","revive","rhexia","rhumbs","riddel","ridger","riggers","riling","ritzier","robinin","rochets","romaunt","rondels","ronion","rontgen","roomed","rosilla","rotund","rouens","rowland","rufous","ruinate","runouts","ruppia","safflow","salpid","saltish","sambuca","samechs","samogon","sanand","sandal","sauries","sausage","sayest","scards","scarph","scient","scolded","scrabe","scramb","screeno","scrying","scummer","scungy","scurfy","scutal","sealing","seaman","seamer","seatang","seawall","secondi","seedbox","seedman","seepier","sekhwan","serein","shamim","shanny","shikii","shinny","shippo","shippon","shoeman","shride","sibness","siccan","sinaite","sitars","siwens","sizzles","skatist","skeery","skunked","sladang","slammed","sloughs","slovak","snakes","snapped","snocker","songle","sorghum","soritic","sorted","soubise","spaller","sparger","spinets","spitish","splats","sponges","spoors","sprose","stadias","stalks","stamina","starred","stashes","statary","steamy","steeply","steeves","stenchy","stenos","sthene","stinks","stodge","stomper","stools","stoppel","stradl","stulls","subman","subnude","suborn","succubi","suldan","sulfide","superb","surculi","surras","sursize","susanne","sussex","swales","sweepup","sylvin","synagog","syphon","tailage","tainte","takhaar","talons","talukas","tampers","tangie","tanned","tapiro","tardily","tarman","tarras","tarsal","taryard","tauric","taximan","teather","teller","telopea","tempter","tenail","tenpins","tenzon","teopan","tetched","tetryls","thighed","thripel","thulir","thworl","tictocs","tiffing","tightly","tinlike","tinsels","tisanes","tissued","tituli","tofore","toggles","toluate","toluole","tongan","toolsi","tootsy","torched","torcher","tortue","toters","towner","toxins","trachle","tragion","trashed","travels","travois","treadle","trehala","treron","triace","triage","trilite","trucker","trustee","turnel","tutenag","tuyeres","twelves","tychism","ulster","umbered","unakite","unbench","unbusk","unchain","uncoyly","uncrate","unfixes","ungain","ungrip","unhuman","unlaced","unline","unmerge","unoped","unrigs","unsewn","unsheer","unspilt","unsting","unsure","untawed","unthaw","unweal","upband","uppoint","uprist","upriver","uredial","vacated","vacuums","vassar","vaulter","vejovis","velary","venues","venular","versine","versus","vesper","violas","virions","visaing","viseing","vivres","voyages","wairing","wanghee","washen","wedged","weenong","weever","wheeped","whipray","whomps","wingle","winkles","winoes","witter","witting","woaded","wooding","woodlet","woofell","woollen","wriggle","wrongdo","wurset","yantras","yarura","yeoman","yessed","zanjon","zitzith"];
        var vNewWord = vDictionary[Math.floor(Math.random() * vDictionary.length)];
        this.vCurrentWord = vNewWord;
        this.vPassedArray = [];
        this.vCorrectArray = [];
        this.vErrors = 0;
        console.log(this.vCurrentWord);
        for (var i=0; i<this.vCurrentWord.length; i++){
            this.vCorrectArray[i]= "0";
        };
        return vNewWord;
    },

    //Set the new game
    setNewGame: function(pHangManSpace, pWordSpace, pPassedLettersSpace, pWinSpace, pLoseSpace) {
        this.showHangmanDrawing(pHangManSpace,0);
        this.getNewWord();
        this.showWordProgress(pWordSpace,this.vCorrectArray);
        this.showPassedLetters(pPassedLettersSpace,this.vPassedArray);
        this.showWinSpace(pWinSpace,this.vWins, false);
        this.showLoseSpace(pLoseSpace,this.vLoses, false);
    },

    //Reset the new game
    resetGame: function(pHangManSpace, pWordSpace, pPassedLettersSpace, pWinSpace, pLoseSpace) {
        this.showHangmanDrawing(pHangManSpace,0);
        this.getNewWord();
        this.showWordProgress(pWordSpace,this.vCorrectArray);
        this.showPassedLetters(pPassedLettersSpace,this.vPassedArray);
        this.showWinSpace(pWinSpace,this.vWins, false);
        this.vLoses++;
        this.showLoseSpace(pLoseSpace,this.vLoses, true);
    },


    //Show the word progress
    showWordProgress: function(pObject, pWordArray) {
        if((typeof(pObject) != 'undefined' && pObject != null) && (typeof(pWordArray) != 'undefined' && pWordArray != null)){
            var vObject = document.getElementById(pObject);
            vObject.innerHTML="";
            for(var i = 0; i<pWordArray.length; i++){
                if(pWordArray[i]=="0"){
                    vObject.innerHTML += "_&nbsp;&nbsp;";

                }else{
                    vObject.innerHTML += pWordArray[i] + "&nbsp;&nbsp;";
                }
            }
        };
    },

    //Show the word progress
    showPassedLetters: function(pObject, pLettersArray) {
        if((typeof(pObject) != 'undefined' && pObject != null) && (typeof(pLettersArray) != 'undefined' && pLettersArray != null)){
            var vObject = document.getElementById(pObject);
            vObject.innerHTML="";
            for(var i = 0; i<pLettersArray.length; i++){
                if(pLettersArray[i][2]=="r"){
                    vObject.innerHTML += '<span style="color:red">' + pLettersArray[i][0] + '</span>&nbsp;&nbsp;';

                }else if(pLettersArray[i][2]=="b"){
                    vObject.innerHTML += '<span style="color:black">' + pLettersArray[i][0] + '</span>&nbsp;&nbsp;';
                }
            }
        };
    },

    //Show the winning space
    showWinSpace: function(pObject, pWins, pSound) {
        if(pSound){
            var audio = document.createElement('audio');
            audio.src = 'assets/sounds/winner.mp3'
            audio.play();
        }
        var vObject = document.getElementById(pObject);
        vObject.innerHTML = pWins;


    },

    //Show the Loses space
    showLoseSpace: function(pObject, pLoses, pSound) {
        if(pSound){
            var audio = document.createElement('audio');
            audio.src = 'assets/sounds/loser.mp3'
            audio.play();
        }
        var vObject = document.getElementById(pObject);
        vObject.innerHTML = pLoses;
    },

    //Function that validates if key pressed is an Alphabet letter.
    isKeyPressedALetter: function(pKeyPressedValue) {
        vIsLetter = false;
        for(var i=0; i<this.vAlphabet.length; i++){
            if(this.vAlphabet[i]==pKeyPressedValue){
                vIsLetter = true;
                i=this.vAlphabet.length;
            }
        }
        return vIsLetter;
    },

    //Function that validates if key pressed is an Alphabet letter.
    isLetterPassed: function(pKeyPressedValue) {
        vIsPassed = true;
        for(var i=0; i<this.vPassedArray.length; i++){
            if(this.vPassedArray[i][0]==pKeyPressedValue){
                vIsPassed = false;
                i=this.vPassedArray.length;
            }
        }
        return vIsPassed;
    },

    //Function that validates if the word is complete
    isWordCompleted: function(pWordArray) {
        var vIsComplete= true;
        for(var i=0; i<pWordArray.length; i++){
            if(pWordArray[i]=="0"){
                vIsComplete = false;
                
            }
        }
        return vIsComplete;
    },

    //Show the word progress
    checkKeyPressed: function(pKeyPressed, pHangManSpace, pWordSpace, pPassedLettersSpace, pWinSpcae, pLoseSpace) {
        if(this.isLetterPassed(pKeyPressed)){
            this.vTempArray=[];
        
            if((typeof(pKeyPressed) != 'undefined' && pKeyPressed != null)){
                if(this.isKeyPressedALetter(pKeyPressed)){
                  //check if the letter is in the current word
                    if(this.vCurrentWord.indexOf(pKeyPressed)>=0){
                        for(var i=0; i<this.vCurrentWord.length; i++){
                            if (this.vCurrentWord[i]==pKeyPressed){
                            //if Pressed Key Value is in the Current Word, the temporal array 
                            //get every position of the letter and save the passed letter as green
                                this.vTempArray.push(i);
                                
                            }
                        }
                        this.vPassedArray.push(pKeyPressed + "|b");
                    }else{
                        //if Pressed Key Value is NOT in the Current Word, the letter and save 
                        //the passed letter as red
                        this.vPassedArray.push(pKeyPressed + "|r");
                        this.vErrors++;                      
                    }
    
                    //if the pressed key is correct then activate the letter in de Correct array
                    if(this.vTempArray.length>0){
                        for(var j = 0; j<this.vTempArray.length; j++){
                            this.vCorrectArray[this.vTempArray[j]]=this.vCurrentWord[this.vTempArray[j]];
                        }
                    }
    
                    //Draw the hangman
                    this.showHangmanDrawing(pHangManSpace,this.vErrors);
    
                    //Draw the Word Progress
                    this.showWordProgress(pWordSpace, this.vCorrectArray);
    
                    //Draw the Passed Letters
                    this.showPassedLetters(pPassedLettersSpace, this.vPassedArray);
    
                    //Draw the Win space
                    if (this.isWordCompleted(this.vCorrectArray)){
                        this.vWins++;
                        this.showWinSpace(pWinSpcae, this.vWins, true);
                    }else if (this.vErrors==14){
                        //Draw the lose
                        this.vLoses++;
                        this.showLoseSpace(pLoseSpace, this.vLoses, true);
                    }
                }
            }else{
            console.log("Some variables are nor define!.");
            }
    
        }
        
    },

};


hangman.setNewGame("HangmanDraw", "CurrentWord", "PassedLetters", "WinScore", "LoseScore");
document.onkeyup = function(event) {
    if(hangman.vErrors<14 && !hangman.isWordCompleted(hangman.vCorrectArray)){
        if(event.key==" "){
            hangman.resetGame("HangmanDraw", "CurrentWord", "PassedLetters", "WinScore", "LoseScore");
        }else {
            hangman.checkKeyPressed(event.key,"HangmanDraw", "CurrentWord", "PassedLetters", "WinScore", "LoseScore");
        };    
    }else{
        hangman.setNewGame("HangmanDraw", "CurrentWord", "PassedLetters", "WinScore", "LoseScore");
    };



};
