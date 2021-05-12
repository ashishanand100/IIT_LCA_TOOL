window.addEventListener('load' , () =>{

/*******************************************HOT MIX ASPHALT****************************************************** */
const FLAG = localStorage.getItem('FLAG');
if(parseFloat(FLAG)==0){
    const TOT1_HM_EN = localStorage.getItem('TOT1_HM_EN');
    document.getElementById("TOT1_HM_EN").textContent =  parseFloat(TOT1_HM_EN).toFixed(3);
    const TOT2_HM_EN = localStorage.getItem('TOT2_HM_EN');
    document.getElementById("TOT2_HM_EN").textContent = parseFloat(TOT2_HM_EN).toFixed(3);
    const TOT3_HM_EN = localStorage.getItem('TOT3_HM_EN');
    document.getElementById("TOT3_HM_EN").textContent = parseFloat(TOT3_HM_EN).toFixed(3);
    const TOT_HM_EN = localStorage.getItem('TOT_HM_EN');
    document.getElementById("TOT_HM_EN").textContent = parseFloat(TOT_HM_EN).toFixed(3);
  
  
  
    const TOT1_HM_CO2 = localStorage.getItem('TOT1_HM_CO2');
    document.getElementById("TOT1_HM_CO2").textContent = parseFloat(TOT1_HM_CO2).toFixed(3);
    const TOT2_HM_CO2 = localStorage.getItem('TOT2_HM_CO2');
    document.getElementById("TOT2_HM_CO2").textContent = parseFloat(TOT2_HM_CO2).toFixed(3);
    const TOT3_HM_CO2 = localStorage.getItem('TOT3_HM_CO2');
    document.getElementById("TOT3_HM_CO2").textContent = parseFloat(TOT3_HM_CO2).toFixed(3);
    const TOT_HM_CO2 = localStorage.getItem('TOT_HM_CO2');
    document.getElementById("TOT_HM_CO2").textContent = parseFloat(TOT_HM_CO2).toFixed(3);


    const TOT1_HM_SO2 = localStorage.getItem('TOT1_HM_SO2');
    document.getElementById("TOT1_HM_SO2").textContent = parseFloat(TOT1_HM_SO2).toFixed(3);
    const TOT2_HM_SO2 = localStorage.getItem('TOT2_HM_SO2');
    document.getElementById("TOT2_HM_SO2").textContent = parseFloat(TOT2_HM_SO2).toFixed(3);
    const TOT3_HM_SO2 = localStorage.getItem('TOT3_HM_SO2');
    document.getElementById("TOT3_HM_SO2").textContent = parseFloat(TOT3_HM_SO2).toFixed(3);
    const TOT_HM_SO2 = localStorage.getItem('TOT_HM_SO2');
    document.getElementById("TOT_HM_SO2").textContent = parseFloat(TOT_HM_SO2).toFixed(3);


    const TOT1_HM_CO = localStorage.getItem('TOT1_HM_CO');
    document.getElementById("TOT1_HM_CO").textContent = parseFloat(TOT1_HM_CO).toFixed(3);
    const TOT2_HM_CO = localStorage.getItem('TOT2_HM_CO');
    document.getElementById("TOT2_HM_CO").textContent = parseFloat(TOT2_HM_CO).toFixed(3);
    const TOT3_HM_CO = localStorage.getItem('TOT3_HM_CO');
    document.getElementById("TOT3_HM_CO").textContent = parseFloat(TOT3_HM_CO).toFixed(3);
    const TOT_HM_CO = localStorage.getItem('TOT_HM_CO');
    document.getElementById("TOT_HM_CO").textContent = parseFloat(TOT_HM_CO).toFixed(3);


    const TOT1_HM_NOX = localStorage.getItem('TOT1_HM_NOX');
    document.getElementById("TOT1_HM_NOX").textContent = parseFloat(TOT1_HM_NOX).toFixed(3);
    const TOT2_HM_NOX = localStorage.getItem('TOT2_HM_NOX');
    document.getElementById("TOT2_HM_NOX").textContent = parseFloat(TOT2_HM_NOX).toFixed(3);
    const TOT3_HM_NOX = localStorage.getItem('TOT3_HM_NOX');
    document.getElementById("TOT3_HM_NOX").textContent = parseFloat(TOT3_HM_NOX).toFixed(3);
    const TOT_HM_NOX = localStorage.getItem('TOT_HM_NOX');
    document.getElementById("TOT_HM_NOX").textContent = parseFloat(TOT_HM_NOX).toFixed(3);


    const TOT1_HM_PM10 = localStorage.getItem('TOT1_HM_PM10');
    document.getElementById("TOT1_HM_PM10").textContent = parseFloat(TOT1_HM_PM10).toFixed(3);
    const TOT2_HM_PM10 = localStorage.getItem('TOT2_HM_PM10');
    document.getElementById("TOT2_HM_PM10").textContent = parseFloat(TOT2_HM_PM10).toFixed(3);
    const TOT3_HM_PM10 = localStorage.getItem('TOT3_HM_PM10');
    document.getElementById("TOT3_HM_PM10").textContent = parseFloat(TOT3_HM_PM10).toFixed(3);
    const TOT_HM_PM10 = localStorage.getItem('TOT_HM_PM10');
    document.getElementById("TOT_HM_PM10").textContent = parseFloat(TOT_HM_PM10).toFixed(3);

 /*******************************************WARM MIX ASPHALT****************************************************** */
    const TOT1_WM_EN = localStorage.getItem('TOT1_WM_EN');
    document.getElementById("TOT1_WM_EN").textContent =  parseFloat(TOT1_WM_EN).toFixed(3);
    const TOT2_WM_EN = localStorage.getItem('TOT2_WM_EN');
    document.getElementById("TOT2_WM_EN").textContent = parseFloat(TOT2_WM_EN).toFixed(3);
    const TOT3_WM_EN = localStorage.getItem('TOT3_WM_EN');
    document.getElementById("TOT3_WM_EN").textContent = parseFloat(TOT3_WM_EN).toFixed(3);
    const TOT_WM_EN = localStorage.getItem('TOT_WM_EN');
    document.getElementById("TOT_WM_EN").textContent = parseFloat(TOT_WM_EN).toFixed(3);  
 
    const TOT1_WM_CO2 = localStorage.getItem('TOT1_WM_CO2');
    document.getElementById("TOT1_WM_CO2").textContent = parseFloat(TOT1_WM_CO2).toFixed(3);
    const TOT2_WM_CO2 = localStorage.getItem('TOT2_WM_CO2');
    document.getElementById("TOT2_WM_CO2").textContent = parseFloat(TOT2_WM_CO2).toFixed(3);
    const TOT3_WM_CO2 = localStorage.getItem('TOT3_WM_CO2');
    document.getElementById("TOT3_WM_CO2").textContent = parseFloat(TOT3_WM_CO2).toFixed(3);
    const TOT_WM_CO2 = localStorage.getItem('TOT_WM_CO2');
    document.getElementById("TOT_WM_CO2").textContent = parseFloat(TOT_WM_CO2).toFixed(3);

    const TOT1_WM_SO2 = localStorage.getItem('TOT1_WM_SO2');
    document.getElementById("TOT1_WM_SO2").textContent = parseFloat(TOT1_WM_SO2).toFixed(3);
    const TOT2_WM_SO2 = localStorage.getItem('TOT2_WM_SO2');
    document.getElementById("TOT2_WM_SO2").textContent = parseFloat(TOT2_WM_SO2).toFixed(3);
    const TOT3_WM_SO2 = localStorage.getItem('TOT3_WM_SO2');
    document.getElementById("TOT3_WM_SO2").textContent = parseFloat(TOT3_WM_SO2).toFixed(3);
    const TOT_WM_SO2 = localStorage.getItem('TOT_WM_SO2');
    document.getElementById("TOT_WM_SO2").textContent = parseFloat(TOT_WM_SO2).toFixed(3);

    const TOT1_WM_CO = localStorage.getItem('TOT1_WM_CO');
    document.getElementById("TOT1_WM_CO").textContent = parseFloat(TOT1_WM_CO).toFixed(3);
    const TOT2_WM_CO = localStorage.getItem('TOT2_WM_CO');
    document.getElementById("TOT2_WM_CO").textContent = parseFloat(TOT2_WM_CO).toFixed(3);
    const TOT3_WM_CO = localStorage.getItem('TOT3_WM_CO');
    document.getElementById("TOT3_WM_CO").textContent = parseFloat(TOT3_WM_CO).toFixed(3);
    const TOT_WM_CO = localStorage.getItem('TOT_WM_CO');
    document.getElementById("TOT_WM_CO").textContent = parseFloat(TOT_WM_CO).toFixed(3);

    const TOT1_WM_NOX = localStorage.getItem('TOT1_WM_NOX');
    document.getElementById("TOT1_WM_NOX").textContent = parseFloat(TOT1_WM_NOX).toFixed(3);
    const TOT2_WM_NOX = localStorage.getItem('TOT2_WM_NOX');
    document.getElementById("TOT2_WM_NOX").textContent = parseFloat(TOT2_WM_NOX).toFixed(3);
    const TOT3_WM_NOX = localStorage.getItem('TOT3_WM_NOX');
    document.getElementById("TOT3_WM_NOX").textContent = parseFloat(TOT3_WM_NOX).toFixed(3);
    const TOT_WM_NOX = localStorage.getItem('TOT_WM_NOX');
    document.getElementById("TOT_WM_NOX").textContent = parseFloat(TOT_WM_NOX).toFixed(3);

    const TOT1_WM_PM10 = localStorage.getItem('TOT1_WM_PM10');
    document.getElementById("TOT1_WM_PM10").textContent = parseFloat(TOT1_WM_PM10).toFixed(3);
    const TOT2_WM_PM10 = localStorage.getItem('TOT2_WM_PM10');
    document.getElementById("TOT2_WM_PM10").textContent = parseFloat(TOT2_WM_PM10).toFixed(3);
    const TOT3_WM_PM10 = localStorage.getItem('TOT3_WM_PM10');
    document.getElementById("TOT3_WM_PM10").textContent = parseFloat(TOT3_WM_PM10).toFixed(3);
    const TOT_WM_PM10 = localStorage.getItem('TOT_WM_PM10');
    document.getElementById("TOT_WM_PM10").textContent = parseFloat(TOT_WM_PM10).toFixed(3);


/*******************************************COLD MIX ASPHALT****************************************************** */


    const TOT1_CM_EN = localStorage.getItem('TOT1_CM_EN');
    document.getElementById("TOT1_CM_EN").textContent =  parseFloat(TOT1_CM_EN).toFixed(3);
    const TOT2_CM_EN = localStorage.getItem('TOT2_CM_EN');
    document.getElementById("TOT2_CM_EN").textContent = parseFloat(TOT2_CM_EN).toFixed(3);
    const TOT3_CM_EN = localStorage.getItem('TOT3_CM_EN');
    document.getElementById("TOT3_CM_EN").textContent = parseFloat(TOT3_CM_EN).toFixed(3);
    const TOT_CM_EN = localStorage.getItem('TOT_CM_EN');
    document.getElementById("TOT_CM_EN").textContent = parseFloat(TOT_CM_EN).toFixed(3);



    const TOT1_CM_CO2 = localStorage.getItem('TOT1_CM_CO2');
    document.getElementById("TOT1_CM_CO2").textContent = parseFloat(TOT1_CM_CO2).toFixed(3);
    const TOT2_CM_CO2 = localStorage.getItem('TOT2_CM_CO2');
    document.getElementById("TOT2_CM_CO2").textContent = parseFloat(TOT2_CM_CO2).toFixed(3);
    const TOT3_CM_CO2 = localStorage.getItem('TOT3_CM_CO2');
    document.getElementById("TOT3_CM_CO2").textContent = parseFloat(TOT3_CM_CO2).toFixed(3);
    const TOT_CM_CO2 = localStorage.getItem('TOT_CM_CO2');
    document.getElementById("TOT_CM_CO2").textContent = parseFloat(TOT_CM_CO2).toFixed(3);

    const TOT1_CM_SO2 = localStorage.getItem('TOT1_CM_SO2');
    document.getElementById("TOT1_CM_SO2").textContent = parseFloat(TOT1_CM_SO2).toFixed(3);
    const TOT2_CM_SO2 = localStorage.getItem('TOT2_CM_SO2');
    document.getElementById("TOT2_CM_SO2").textContent = parseFloat(TOT2_CM_SO2).toFixed(3);
    const TOT3_CM_SO2 = localStorage.getItem('TOT3_CM_SO2');
    document.getElementById("TOT3_CM_SO2").textContent = parseFloat(TOT3_CM_SO2).toFixed(3);
    const TOT_CM_SO2 = localStorage.getItem('TOT_CM_SO2');
    document.getElementById("TOT_CM_SO2").textContent = parseFloat(TOT_CM_SO2).toFixed(3);

    const TOT1_CM_CO = localStorage.getItem('TOT1_CM_CO');
    document.getElementById("TOT1_CM_CO").textContent = parseFloat(TOT1_CM_CO).toFixed(3);
    const TOT2_CM_CO = localStorage.getItem('TOT2_CM_CO');
    document.getElementById("TOT2_CM_CO").textContent = parseFloat(TOT2_CM_CO).toFixed(3);
    const TOT3_CM_CO = localStorage.getItem('TOT3_CM_CO');
    document.getElementById("TOT3_CM_CO").textContent = parseFloat(TOT3_CM_CO).toFixed(3);
    const TOT_CM_CO = localStorage.getItem('TOT_CM_CO');
    document.getElementById("TOT_CM_CO").textContent = parseFloat(TOT_CM_CO).toFixed(3);

    const TOT1_CM_NOX = localStorage.getItem('TOT1_CM_NOX');
    document.getElementById("TOT1_CM_NOX").textContent = parseFloat(TOT1_CM_NOX).toFixed(3);
    const TOT2_CM_NOX = localStorage.getItem('TOT2_CM_NOX');
    document.getElementById("TOT2_CM_NOX").textContent = parseFloat(TOT2_CM_NOX).toFixed(3);
    const TOT3_CM_NOX = localStorage.getItem('TOT3_CM_NOX');
    document.getElementById("TOT3_CM_NOX").textContent = parseFloat(TOT3_CM_NOX).toFixed(3);
    const TOT_CM_NOX = localStorage.getItem('TOT_CM_NOX');
    document.getElementById("TOT_CM_NOX").textContent = parseFloat(TOT_CM_NOX).toFixed(3);

    const TOT1_CM_PM10 = localStorage.getItem('TOT1_CM_PM10');
    document.getElementById("TOT1_CM_PM10").textContent = parseFloat(TOT1_CM_PM10).toFixed(3);
    const TOT2_CM_PM10 = localStorage.getItem('TOT2_CM_PM10');
    document.getElementById("TOT2_CM_PM10").textContent = parseFloat(TOT2_CM_PM10).toFixed(3);
    const TOT3_CM_PM10 = localStorage.getItem('TOT3_CM_PM10');
    document.getElementById("TOT3_CM_PM10").textContent = parseFloat(TOT3_CM_PM10).toFixed(3);
    const TOT_CM_PM10 = localStorage.getItem('TOT_CM_PM10');
    document.getElementById("TOT_CM_PM10").textContent = parseFloat(TOT_CM_PM10).toFixed(3);
}
else{
    const TOT1_HM_EN = localStorage.getItem('TOT1_HM_EN');
    document.getElementById("TOT1_HM_EN").textContent =  parseFloat(524172.685).toFixed(3);
    const TOT2_HM_EN = localStorage.getItem('TOT2_HM_EN');
  
    document.getElementById("TOT2_HM_EN").textContent = parseFloat(16148.162).toFixed(3);
    const TOT3_HM_EN = localStorage.getItem('TOT3_HM_EN');
    document.getElementById("TOT3_HM_EN").textContent = parseFloat(6854.133).toFixed(3);
    const TOT_HM_EN = localStorage.getItem('TOT_HM_EN');
    document.getElementById("TOT_HM_EN").textContent = parseFloat(547174.980).toFixed(3);
  
  
  
    const TOT1_HM_CO2 = localStorage.getItem('TOT1_HM_CO2');
    document.getElementById("TOT1_HM_CO2").textContent = parseFloat(16485.236).toFixed(3);
    const TOT2_HM_CO2 = localStorage.getItem('TOT2_HM_CO2');
    document.getElementById("TOT2_HM_CO2").textContent = parseFloat(880.6).toFixed(3);
    const TOT3_HM_CO2 = localStorage.getItem('TOT3_HM_CO2');
    document.getElementById("TOT3_HM_CO2").textContent = parseFloat(338.358).toFixed(3);
    const TOT_HM_CO2 = localStorage.getItem('TOT_HM_CO2');
    document.getElementById("TOT_HM_CO2").textContent = parseFloat(17704.194).toFixed(3);


    const TOT1_HM_SO2 = localStorage.getItem('TOT1_HM_SO2');
    document.getElementById("TOT1_HM_SO2").textContent = parseFloat(115.472).toFixed(3);
    const TOT2_HM_SO2 = localStorage.getItem('TOT2_HM_SO2');
    document.getElementById("TOT2_HM_SO2").textContent = parseFloat(0.876).toFixed(3);
    const TOT3_HM_SO2 = localStorage.getItem('TOT3_HM_SO2');
    document.getElementById("TOT3_HM_SO2").textContent = parseFloat(0.021).toFixed(3);
    const TOT_HM_SO2 = localStorage.getItem('TOT_HM_SO2');
    document.getElementById("TOT_HM_SO2").textContent = parseFloat(116.369).toFixed(3);


    const TOT1_HM_CO = localStorage.getItem('TOT1_HM_CO');
    document.getElementById("TOT1_HM_CO").textContent = parseFloat(17.66).toFixed(3);
    const TOT2_HM_CO = localStorage.getItem('TOT2_HM_CO');
    document.getElementById("TOT2_HM_CO").textContent = parseFloat(0.782).toFixed(3);
    const TOT3_HM_CO = localStorage.getItem('TOT3_HM_CO');
    document.getElementById("TOT3_HM_CO").textContent = parseFloat(0.524).toFixed(3);
    const TOT_HM_CO = localStorage.getItem('TOT_HM_CO');
    document.getElementById("TOT_HM_CO").textContent = parseFloat(18.906).toFixed(3);


    const TOT1_HM_NOX = localStorage.getItem('TOT1_HM_NOX');
    document.getElementById("TOT1_HM_NOX").textContent = parseFloat(32.458).toFixed(3);
    const TOT2_HM_NOX = localStorage.getItem('TOT2_HM_NOX');
    document.getElementById("TOT2_HM_NOX").textContent = parseFloat(3.86).toFixed(3);
    const TOT3_HM_NOX = localStorage.getItem('TOT3_HM_NOX');
    document.getElementById("TOT3_HM_NOX").textContent = parseFloat(1.48).toFixed(3);
    const TOT_HM_NOX = localStorage.getItem('TOT_HM_NOX');
    document.getElementById("TOT_HM_NOX").textContent = parseFloat(37.798).toFixed(3);


    const TOT1_HM_PM10 = localStorage.getItem('TOT1_HM_PM10');
    document.getElementById("TOT1_HM_PM10").textContent = parseFloat(0.487).toFixed(3);
    const TOT2_HM_PM10 = localStorage.getItem('TOT2_HM_PM10');
    document.getElementById("TOT2_HM_PM10").textContent = parseFloat(0).toFixed(3);
    const TOT3_HM_PM10 = localStorage.getItem('TOT3_HM_PM10');
    document.getElementById("TOT3_HM_PM10").textContent = parseFloat(0.111).toFixed(3);
    const TOT_HM_PM10 = localStorage.getItem('TOT_HM_PM10');
    document.getElementById("TOT_HM_PM10").textContent = parseFloat(0.598).toFixed(3);


 /*******************************************WARM MIX ASPHALT****************************************************** */
    const TOT1_WM_EN = localStorage.getItem('TOT1_WM_EN');
    document.getElementById("TOT1_WM_EN").textContent =  parseFloat(485244.32).toFixed(3);
    const TOT2_WM_EN = localStorage.getItem('TOT2_WM_EN');
    document.getElementById("TOT2_WM_EN").textContent = parseFloat(16148.464).toFixed(3);
    const TOT3_WM_EN = localStorage.getItem('TOT3_WM_EN');
    document.getElementById("TOT3_WM_EN").textContent = parseFloat(4298.74).toFixed(3);
    const TOT_WM_EN = localStorage.getItem('TOT_WM_EN');
    document.getElementById("TOT_WM_EN").textContent = parseFloat(505671.524).toFixed(3);

    const TOT1_WM_CO2 = localStorage.getItem('TOT1_WM_CO2');
    document.getElementById("TOT1_WM_CO2").textContent = parseFloat(14186.106).toFixed(3);
    const TOT2_WM_CO2 = localStorage.getItem('TOT2_WM_CO2');
    document.getElementById("TOT2_WM_CO2").textContent = parseFloat(724.86).toFixed(3);
    const TOT3_WM_CO2 = localStorage.getItem('TOT3_WM_CO2');
    document.getElementById("TOT3_WM_CO2").textContent = parseFloat(302.202).toFixed(3);
    const TOT_WM_CO2 = localStorage.getItem('TOT_WM_CO2');
    document.getElementById("TOT_WM_CO2").textContent = parseFloat(15213.168).toFixed(3);

    const TOT1_WM_SO2 = localStorage.getItem('TOT1_WM_SO2');
    document.getElementById("TOT1_WM_SO2").textContent = parseFloat(112.66).toFixed(3);
    const TOT2_WM_SO2 = localStorage.getItem('TOT2_WM_SO2');
    document.getElementById("TOT2_WM_SO2").textContent = parseFloat(0.778).toFixed(3);
    const TOT3_WM_SO2 = localStorage.getItem('TOT3_WM_SO2');
    document.getElementById("TOT3_WM_SO2").textContent = parseFloat(0.012).toFixed(3);
    const TOT_WM_SO2 = localStorage.getItem('TOT_WM_SO2');
    document.getElementById("TOT_WM_SO2").textContent = parseFloat(113.45).toFixed(3);

    const TOT1_WM_CO = localStorage.getItem('TOT1_WM_CO');
    document.getElementById("TOT1_WM_CO").textContent = parseFloat(15.068).toFixed(3);
    const TOT2_WM_CO = localStorage.getItem('TOT2_WM_CO');
    document.getElementById("TOT2_WM_CO").textContent = parseFloat(0.868).toFixed(3);
    const TOT3_WM_CO = localStorage.getItem('TOT3_WM_CO');
    document.getElementById("TOT3_WM_CO").textContent = parseFloat(0.468).toFixed(3);
    const TOT_WM_CO = localStorage.getItem('TOT_WM_CO');
    document.getElementById("TOT_WM_CO").textContent = parseFloat(16.404).toFixed(3);

    const TOT1_WM_NOX = localStorage.getItem('TOT1_WM_NOX');
    document.getElementById("TOT1_WM_NOX").textContent = parseFloat(22.664).toFixed(3);
    const TOT2_WM_NOX = localStorage.getItem('TOT2_WM_NOX');
    document.getElementById("TOT2_WM_NOX").textContent = parseFloat(3.112).toFixed(3);
    const TOT3_WM_NOX = localStorage.getItem('TOT3_WM_NOX');
    document.getElementById("TOT3_WM_NOX").textContent = parseFloat(1.024).toFixed(3);
    const TOT_WM_NOX = localStorage.getItem('TOT_WM_NOX');
    document.getElementById("TOT_WM_NOX").textContent = parseFloat(26.8).toFixed(3);

    const TOT1_WM_PM10 = localStorage.getItem('TOT1_WM_PM10');
    document.getElementById("TOT1_WM_PM10").textContent = parseFloat(0.386).toFixed(3);
    const TOT2_WM_PM10 = localStorage.getItem('TOT2_WM_PM10');
    document.getElementById("TOT2_WM_PM10").textContent = parseFloat(0).toFixed(3);
    const TOT3_WM_PM10 = localStorage.getItem('TOT3_WM_PM10');
    document.getElementById("TOT3_WM_PM10").textContent = parseFloat(0.092).toFixed(3);
    const TOT_WM_PM10 = localStorage.getItem('TOT_WM_PM10');
    document.getElementById("TOT_WM_PM10").textContent = parseFloat(0.478).toFixed(3);


/*******************************************COLD MIX ASPHALT****************************************************** */


    const TOT1_CM_EN = localStorage.getItem('TOT1_CM_EN');
    document.getElementById("TOT1_CM_EN").textContent =  parseFloat(424327.324).toFixed(3);
    const TOT2_CM_EN = localStorage.getItem('TOT2_CM_EN');
    document.getElementById("TOT2_CM_EN").textContent = parseFloat(30448.66).toFixed(3);
    const TOT3_CM_EN = localStorage.getItem('TOT3_CM_EN');
    document.getElementById("TOT3_CM_EN").textContent = parseFloat(3394.422).toFixed(3);
    const TOT_CM_EN = localStorage.getItem('TOT_CM_EN');
    document.getElementById("TOT_CM_EN").textContent = parseFloat(458170.406).toFixed(3);



    const TOT1_CM_CO2 = localStorage.getItem('TOT1_CM_CO2');
    document.getElementById("TOT1_CM_CO2").textContent = parseFloat(9884.656).toFixed(3);
    const TOT2_CM_CO2 = localStorage.getItem('TOT2_CM_CO2');
    document.getElementById("TOT2_CM_CO2").textContent = parseFloat(502.694).toFixed(3);
    const TOT3_CM_CO2 = localStorage.getItem('TOT3_CM_CO2');
    document.getElementById("TOT3_CM_CO2").textContent = parseFloat(190.452).toFixed(3);
    const TOT_CM_CO2 = localStorage.getItem('TOT_CM_CO2');
    document.getElementById("TOT_CM_CO2").textContent = parseFloat(10577.802).toFixed(3);

    const TOT1_CM_SO2 = localStorage.getItem('TOT1_CM_SO2');
    document.getElementById("TOT1_CM_SO2").textContent = parseFloat(78.756).toFixed(3);
    const TOT2_CM_SO2 = localStorage.getItem('TOT2_CM_SO2');
    document.getElementById("TOT2_CM_SO2").textContent = parseFloat(0.82).toFixed(3);
    const TOT3_CM_SO2 = localStorage.getItem('TOT3_CM_SO2');
    document.getElementById("TOT3_CM_SO2").textContent = parseFloat(0.012).toFixed(3);
    const TOT_CM_SO2 = localStorage.getItem('TOT_CM_SO2');
    document.getElementById("TOT_CM_SO2").textContent = parseFloat(79.588).toFixed(3);

    const TOT1_CM_CO = localStorage.getItem('TOT1_CM_CO');
    document.getElementById("TOT1_CM_CO").textContent = parseFloat(9.968).toFixed(3);
    const TOT2_CM_CO = localStorage.getItem('TOT2_CM_CO');
    document.getElementById("TOT2_CM_CO").textContent = parseFloat(0.544).toFixed(3);
    const TOT3_CM_CO = localStorage.getItem('TOT3_CM_CO');
    document.getElementById("TOT3_CM_CO").textContent = parseFloat(0.302).toFixed(3);
    const TOT_CM_CO = localStorage.getItem('TOT_CM_CO');
    document.getElementById("TOT_CM_CO").textContent = parseFloat(10.814).toFixed(3);

    const TOT1_CM_NOX = localStorage.getItem('TOT1_CM_NOX');
    document.getElementById("TOT1_CM_NOX").textContent = parseFloat(20.056).toFixed(3);
    const TOT2_CM_NOX = localStorage.getItem('TOT2_CM_NOX');
    document.getElementById("TOT2_CM_NOX").textContent = parseFloat(3.022).toFixed(3);
    const TOT3_CM_NOX = localStorage.getItem('TOT3_CM_NOX');
    document.getElementById("TOT3_CM_NOX").textContent = parseFloat(0.968).toFixed(3);
    const TOT_CM_NOX = localStorage.getItem('TOT_CM_NOX');
    document.getElementById("TOT_CM_NOX").textContent = parseFloat(24.046).toFixed(3);

    const TOT1_CM_PM10 = localStorage.getItem('TOT1_CM_PM10');
    document.getElementById("TOT1_CM_PM10").textContent = parseFloat(0.298).toFixed(3);
    const TOT2_CM_PM10 = localStorage.getItem('TOT2_CM_PM10');
    document.getElementById("TOT2_CM_PM10").textContent = parseFloat(0).toFixed(3);
    const TOT3_CM_PM10 = localStorage.getItem('TOT3_CM_PM10');
    document.getElementById("TOT3_CM_PM10").textContent = parseFloat(0.068).toFixed(3);
    const TOT_CM_PM10 = localStorage.getItem('TOT_CM_PM10');
    document.getElementById("TOT_CM_PM10").textContent = parseFloat(0.366).toFixed(3);
}
  


  })