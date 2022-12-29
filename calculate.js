

function calc(){
    //get values from text boxs
    var voltage = document.getElementById('voltInput').value;
    var amps = document.getElementById('ampInput').value;
    var power = document.getElementById('powerInput').value;
    var powerFactor = document.getElementById('powerFACInput').value;
    var powerKVA =0;

    //unit  conversion
    var vUnit = document.getElementById('voltUnit').value;
    var aUnit = document.getElementById('ampUnit').value;
    var pUnit = document.getElementById('powerUnit').value;
    var kvaUnit ="VA";
    if(vUnit == "(KiloVolts)")
    {
        voltage=voltage*1000;
    }
    if(aUnit == "(KiloAmps)")
    {
        amps=amps*1000;
    }
    if(pUnit == "(KiloWatts)")
    {
        power=power*1000;
        kvaUnit = "KVA"
        
    }
    if(pUnit == "(MegaWatts)")
    {
        power=power*1000*1000;
        kvaUnit = "MVA"
    }

    //If power factor is greater than 1 then set the value to 1

    if(powerFactor > 1){
        powerFactor =1;
        document.getElementById('powerFACInput').value=1;
    }



    //!!!!!!!TO DO!!!!! DEFINE ADDED INPUT BOXES AND UPDATE THREE PHASE CALC

    //figure out what equation to use

    //CODE FOR SINGLE PHASE------------------------------------
    if(document.getElementById('btn1Phase').checked)
    {
        if(document.getElementById('solveVoltage').checked)
        {

            voltage = parseFloat(power)/parseFloat(amps);
            //unit result conversion
            if(vUnit == "(KiloVolts)"){voltage=voltage/1000;}
            if(voltage >5){document.getElementById('voltInput').value=voltage.toFixed(0);}
            else{document.getElementById('voltInput').value=voltage.toFixed(2);}
        }
        if(document.getElementById('solveCurrent').checked)
        {
            amps = parseFloat(power)/parseFloat(voltage);
            if(aUnit == "(KiloAmps)"){amps=amps/1000;}
            if(amps >5){document.getElementById('ampInput').value=amps.toFixed(0);}
            else{document.getElementById('ampInput').value=amps.toFixed(2);}
        }
        if(document.getElementById('solvePower').checked)
        {

            power = parseFloat(voltage) * parseFloat(amps)*parseFloat(powerFactor);
            powerKVA =power / powerFactor;
            if(pUnit == "(KiloWatts)"){power=power/1000;}
            if(pUnit == "(MegaWatts)"){power=(power/1000)/1000;}
            if(pUnit == "(KiloWatts)"){powerKVA=powerKVA/1000;}
            if(pUnit == "(MegaWatts)"){powerKVA=(powerKVA/1000)/1000;}
            if(power >5){ document.getElementById('powerInput').value=power.toFixed(0);}//This removes decmil greater than 5
            else {document.getElementById('powerInput').value=power.toFixed(2);}


        }
    }
    //-------------------------------------------------------------------

    ////CODE FOR THREEE PHASE------------------------------------
    if(document.getElementById('btn3Phase').checked)
    {
        if(document.getElementById('solveVoltage').checked)
        {
            voltage = parseFloat(power)/(parseFloat(amps)*parseFloat(powerFactor)*1.732);
            if(vUnit == "(KiloVolts)"){voltage=voltage/1000;}
            if(voltage >5){ document.getElementById('voltInput').value=voltage.toFixed(0);}//This removes decmil greater than 5
            else {document.getElementById('voltInput').value=voltage.toFixed(2);}
        }
        if(document.getElementById('solveCurrent').checked)
        {
            amps = parseFloat(power)/(parseFloat(voltage)*parseFloat(powerFactor)*1.732);
            if(aUnit == "(KiloAmps)"){amps=amps/1000;}
            if(amps >5){document.getElementById('ampInput').value=amps.toFixed(0);}//This removes decmil greater than 5
            else {document.getElementById('ampInput').value=amps.toFixed(2);}
        }
        if(document.getElementById('solvePower').checked)
        {
            power = parseFloat(voltage) * parseFloat(amps)* parseFloat(powerFactor)*1.732;
            powerKVA = power/parseFloat(powerFactor);
            if(pUnit == "(KiloWatts)"){power=power/1000;}
            if(pUnit == "(MegaWatts)"){power=(power/1000)/1000;}
            if(pUnit == "(KiloWatts)"){powerKVA=powerKVA/1000;}
            if(pUnit == "(MegaWatts)"){powerKVA=(powerKVA/1000)/1000;}
            if(power >5){ document.getElementById('powerInput').value=power.toFixed(1);}//This removes decmil greater than 5
            else {document.getElementById('powerInput').value=power.toFixed(2);}
            
        }
    }


    //-------------------------------------------------------------------


    //UPDATE RESULT TABLES WITH VALUES CALCED ABOVE
    document.getElementById('resultPowerFactor').innerHTML= powerFactor;
    if(power >5){document.getElementById('resultPower').innerHTML= power.toFixed(1) + " " + pUnit ;}
    else{document.getElementById('resultPower').innerHTML= power.toFixed(2) + " " + pUnit ;}
    if(powerKVA >5){document.getElementById('resultAppPower').innerHTML= powerKVA.toFixed(1) + " " + kvaUnit ;}
    else{document.getElementById('resultAppPower').innerHTML= powerKVA.toFixed(2) + " " + kvaUnit ;}
    if(voltage >5){document.getElementById('resultVotlage').innerHTML= parseFloat(voltage).toFixed(1) +  " " + vUnit ;}
    else{document.getElementById('resultVotlage').innerHTML= parseFloat(voltage).toFixed(2) +  " " + vUnit ;}
    if(amps >5){document.getElementById('resultCurrent').innerHTML= parseFloat(amps).toFixed(1)+  " " + aUnit;}
    else{document.getElementById('resultCurrent').innerHTML= parseFloat(amps).toFixed(2)+  " " + aUnit;}
    
   
    
    






}

function solveFor(choice){

    var voltageInput = document.getElementById('voltInput');
    var ampsInput = document.getElementById('ampInput');
    var powerInput = document.getElementById('powerInput');

    if(document.getElementById('solveVoltage').checked){
        voltageInput.disabled=true;
        voltageInput.style.backgroundColor = '#E9C451';
        ampsInput.disabled=false;
        ampsInput.style.backgroundColor = '#efefef';
        powerInput.disabled=false;
        powerInput.style.backgroundColor = '#efefef';
        
    }
    if(document.getElementById('solveCurrent').checked){
        voltageInput.disabled=false;
        voltageInput.style.backgroundColor = '#efefef';
        ampsInput.disabled=true;
        ampsInput.style.backgroundColor = '#E9C451';
        powerInput.disabled=false;
        powerInput.style.backgroundColor = '#efefef';
    }
    if(document.getElementById('solvePower').checked){
        voltageInput.disabled=false;
        voltageInput.style.backgroundColor = '#efefef';
        ampsInput.disabled=false;
        ampsInput.style.backgroundColor = '#efefef';
        powerInput.disabled=true;
        powerInput.style.backgroundColor = '#E9C451';
    }
    
   
}


//UNIT UPDATES------------------------------------------
function unitManager()
{

    //Voltage unit update
    var vLabel = document.getElementById('vLabel');
    var vUnit = document.getElementById('voltUnit').value;
    vLabel.innerHTML="VOLTAGE <small>" +  vUnit;

    //Current unit update
    var aLabel = document.getElementById('aLabel');
    var aUnit = document.getElementById('ampUnit').value;
    aLabel.innerHTML="CURRENT <small>" +  aUnit;

    //Power Unit update
    var pLabel = document.getElementById('pLabel');
    var pUnit = document.getElementById('powerUnit').value;
    pLabel.innerHTML="POWER <small>" +  pUnit;

    //rerun calc auto
    calc()
}

