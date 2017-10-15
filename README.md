# Homey Washing Machine Trigger
A HomeyScript which detect with a Neo CoolCam socket if a washing machine has finished his program.

<OL>
  <LI>First I connect the Neo CoolCam socket between the outlet and the powercord of the washing machine.</LI>
  <LI>Add the socket on Homey with the name 'Wasmachine'.</LI>
  <LI>Create a new flow named 'Wasmachine'.</LI>
  <LI>Use 'time/date' as the main trigger and use the "Run every ..." method. Configure for example every 15 minutes.</LI>
  <LI>Add the notification methode you want in the Action column, for example speech or/and mobile.</LI>
  <LI>Now open your HomeyScript editor (https://homeyscript.athom.com) and copy the script from ScriptWashingMachine.js .</LI>
  <LI>If the script is saved, go back to the flow editor and add a HomeyScript item into the And-column. Choose the script you just saved.</LI>
</OL>

Now Homey will check every ? minutes if the power consumption of the washing machine is 0 Watt and if the power consumption is 0 Watt for 50% of the ? minutes interval. If so the flow actions will be started.

Comments and ideas are welcome ;-)
