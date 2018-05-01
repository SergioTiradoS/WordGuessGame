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
        var vDictionary = ["aminoacetophenetidine","aminobenzaldehyde","anachronismatical","anticapitalistically","antisacerdotalist","auriculoventricular","automatictacessing","bunomastodontidae","capsulolenticular","chartographically","complimentariness","crystalloluminescence","cytotrophoblastic","diaheliotropically","disconnectiveness","electroacoustically","electrodiagnostically","electrodissolution","haemoconcentration","inagglutinability","indecipherability","insurrectionaries","internationalisation","internationalized","internationalizes","intraparenchymatous","intraspecifically","irreprehensibleness","lymphangiofibroma","medicopsychological","neuropharmacologist","noncomprehensiblely","nondistributional","nonirrevocableness","overliberalization","paleodentrologist","pharyngolaryngeal","philogenitiveness","physicophilosophy","physiologicoanatomic","postdiaphragmatic","pseudoclassicality","pseudoconglomeration","saccharochemotropic","semicircumference","semiobjectiveness","stereoroentgenography","sulphureosuffused","superinfiniteness","superphysicposing","superregeneration","thoracicoacromial","ultraconscientious","unconservativeness","uncontemplatively","uncontrovertibleness","unconventionalism","undiffractiveness","unenterprisingness","unextinguishableness","uninterchangeable","unmisinterpretable"];
        var vNewWord = vDictionary[Math.floor(Math.random() * vDictionary.length)];
        this.vCurrentWord = vNewWord;
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
        this.showWinSpace(pWinSpace,0);
        this.showLoseSpace(pLoseSpace,0);
    },

    //Reset the new game
    resetGame: function(pHangManSpace, pWordSpace, pPassedLettersSpace, pWinSpace, pLoseSpace) {
        this.showHangmanDrawing(pHangManSpace,0);
        this.getNewWord();
        this.showWordProgress(pWordSpace,this.vCorrectArray);
        this.showPassedLetters(pPassedLettersSpace,this.vPassedArray);
        this.showWinSpace(pWinSpace,this.vWins);
        this.showLoseSpace(pLoseSpace,this.vLoses++);
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
    showWinSpace: function(pObject, pWins) {
        if(pWins>0){
            var audio = document.createElement('audio');
            audio.src = 'assets/sounds/winner.mp3'
            audio.play();
        }
        var vObject = document.getElementById(pObject);
        vObject.innerHTML = pWins;


    },

    //Show the Loses space
    showLoseSpace: function(pObject, pLoses) {
        if(pLoses>0){
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
        this.vTempArray=[];
        
        if((typeof(pKeyPressed) != 'undefined' && pKeyPressed != null)){
            if(this.isKeyPressedALetter(pKeyPressed)){
              console.log("The Pressed Key value:" + pKeyPressed + " is a letter. And indexof" + this.vCurrentWord.indexOf(pKeyPressed));
              //check if the letter is in the current word
                if(this.vCurrentWord.indexOf(pKeyPressed)>=0){
                    for(var i=0; i<this.vCurrentWord.length; i++){
                        console.log("For:" + this.vCurrentWord[i] + " in the word.");
                        if (this.vCurrentWord[i]==pKeyPressed){
                            console.log("i:" + i + "vCurrentWord[i]:" + this.vCurrentWord[i] + " pKeyPressed:" + pKeyPressed);
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
                        console.log("j:" + j + "vTempArray[j]:" + this.vTempArray[j] + " vCurrentWord:" + this.vCurrentWord[this.vTempArray[j]]);
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
                    this.showWinSpace(pWinSpcae, this.vWins);
                }else if (this.vErrors==14){
                    //Draw the lose
                    this.vLoses++;
                    this.showLoseSpace(pLoseSpace, this.vLoses);
                }
                
                


            }
        }else{
        console.log("Some variables are nor define!.");
        }
        
    },

};

//hangman.showHangmanDrawing("HangmanDraw",0); "WordProgress"
//var vTest = ["s|b","e|b","r|r","g|r","i|b","o|r"];
//hangman.showPassedLetters("PassedLetters",vTest);
hangman.setNewGame("HangmanDraw", "CurrentWord", "PassedLetters", "WinScore", "LoseScore");
document.onkeyup = function(event) {
    console.log(event);
    hangman.checkKeyPressed(event.key,"HangmanDraw", "CurrentWord", "PassedLetters", "WinScore", "LoseScore");
  };
