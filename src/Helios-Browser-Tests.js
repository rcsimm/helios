define("helios/Helios-Browser-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('Helios-Browser-Tests');
smalltalk.packages["Helios-Browser-Tests"].transport = {"type":"amd","amdNamespace":"helios"};

smalltalk.addClass('HLBrowserTest', globals.TestCase, ['browser'], 'Helios-Browser-Tests');
globals.HLBrowserTest.comment="Test cases for the functionality of  `HLBrowserModel`";
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
protocol: 'tests',
fn: function (){
var self=this;
function $HLBrowserModel(){return globals.HLBrowserModel||(typeof HLBrowserModel=="undefined"?nil:HLBrowserModel)}
return smalltalk.withContext(function($ctx1) { 
self["@browser"]=_st($HLBrowserModel())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},globals.HLBrowserTest)})},
args: [],
source: "setUp\x0a\x09browser := HLBrowserModel new.",
messageSends: ["new"],
referencedClasses: ["HLBrowserModel"]
}),
globals.HLBrowserTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAllProtocolsSelectedWhenSelectingAClass",
protocol: 'tests',
fn: function (){
var self=this;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self["@browser"])._selectedProtocol();
$ctx1.sendIdx["selectedProtocol"]=1;
$1=_st($2)._isNil();
self._assert_($1);
_st(self["@browser"])._selectedClass_($Object());
self._assert_equals_(_st(self["@browser"])._selectedProtocol(),_st(self["@browser"])._allProtocol());
return self}, function($ctx1) {$ctx1.fill(self,"testAllProtocolsSelectedWhenSelectingAClass",{},globals.HLBrowserTest)})},
args: [],
source: "testAllProtocolsSelectedWhenSelectingAClass\x0a\x09self assert: browser selectedProtocol isNil.\x0a\x09browser selectedClass: Object.\x0a\x09self assert: browser selectedProtocol equals: browser allProtocol.",
messageSends: ["assert:", "isNil", "selectedProtocol", "selectedClass:", "assert:equals:", "allProtocol"],
referencedClasses: ["Object"]
}),
globals.HLBrowserTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testProtocolSelectedWhenChangingClass",
protocol: 'tests',
fn: function (){
var self=this;
var protocolSelectedCalled;
function $HLProtocolSelected(){return globals.HLProtocolSelected||(typeof HLProtocolSelected=="undefined"?nil:HLProtocolSelected)}
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
function $ProtoObject(){return globals.ProtoObject||(typeof ProtoObject=="undefined"?nil:ProtoObject)}
return smalltalk.withContext(function($ctx1) { 
protocolSelectedCalled=(0);
_st(_st(self["@browser"])._announcer())._on_do_for_($HLProtocolSelected(),(function(){
return smalltalk.withContext(function($ctx2) {
protocolSelectedCalled=_st(protocolSelectedCalled).__plus((1));
return protocolSelectedCalled;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),self);
_st(self["@browser"])._selectedClass_($Object());
$ctx1.sendIdx["selectedClass:"]=1;
self._assert_equals_(protocolSelectedCalled,(1));
$ctx1.sendIdx["assert:equals:"]=1;
_st(self["@browser"])._selectedClass_($ProtoObject());
self._assert_equals_(protocolSelectedCalled,(2));
return self}, function($ctx1) {$ctx1.fill(self,"testProtocolSelectedWhenChangingClass",{protocolSelectedCalled:protocolSelectedCalled},globals.HLBrowserTest)})},
args: [],
source: "testProtocolSelectedWhenChangingClass\x0a\x09| protocolSelectedCalled |\x0a\x09protocolSelectedCalled := 0.\x0a\x09browser announcer on: HLProtocolSelected do: [protocolSelectedCalled := protocolSelectedCalled + 1] for: self.\x0a\x09browser selectedClass: Object.\x0a\x09self assert: protocolSelectedCalled equals: 1.\x0a\x09browser selectedClass: ProtoObject.\x0a\x09self assert: protocolSelectedCalled equals: 2.",
messageSends: ["on:do:for:", "announcer", "+", "selectedClass:", "assert:equals:"],
referencedClasses: ["HLProtocolSelected", "Object", "ProtoObject"]
}),
globals.HLBrowserTest);


});
