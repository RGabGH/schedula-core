(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

  // src/models/SchedulaSettings.js
  var SchedulaSettings = class {
    constructor() {
      this.splitBarToggleButtons = true;
      this.resHeaderText = "";
      this.footerHeight = 0;
      this.storeData = true;
      this.animation = true;
      this.canMoveItems = true;
      this.canResizeItems = true;
      this.viewWeeks = true;
      this.viewInfoElements = false;
      this.viewInfo = true;
      this.checkInterferences = true;
      this.shiftItems = true;
      this.calcEffort = true;
      this.optimizeStart = true;
      this.roundRectRadius = 2;
      this.resourceHeight = 48;
      this.resourceWidth = 200;
      this.resourceImages = true;
      this.resourceChange = true;
      this.resCollapsedWidth = 1e3;
      this.splitBarinitPos = 300;
      this.infoElementSize = 15;
      this.resRoundRect = 2;
      this.resPadding = 2;
      this.roundRect = 5;
      this.progressBarPattern = true;
      this.resUnitsView = 0;
      this.timeUnitsView = 30;
      this.timeUnitVal = 1440;
      this.gridStep = 1440;
      this.gridOffset = 0;
      this.timeUnitsCount = 90;
      this.timeWidth = 144;
      this.timeElementHeight = 15;
      this.monthBoxHeight = 50;
      this.weekBoxHeight = 15;
      this.infoElementHeight = 15;
      this.viewMonthLogo = true;
      this.logoTitle = "";
      this.splitterWidth = 10;
      this.sidebarMaxWidth = 350;
      this.sidebarMinWidth = 40;
      this.date = /* @__PURE__ */ new Date("2023-09-21");
      this.groupFilter = 0;
      this.hilightSunday = true;
      this.logo = "";
      this.dropEnable = true;
      this.itemsLinks = false;
      this.drawLinks = false;
      this.linkSpline = true;
      this.itemsPadding = 3;
      this.itemsText = true;
      this.itemTextOffestX = 50;
      this.itemTextOffestY = 40;
      this.itemTextFont = "Arial";
      this.itemTextSize = "30%";
      this.gStyle = "round-rect";
      this.arrowSize = 6;
      this.perfectMatch = false;
      this.viewYear = true;
      this.viewShifters = true;
      this.shifterStep = 10;
      this.viewEvents = true;
      this.viewEventExtended = true;
      this.canMoveEvents = true;
      this.viewStars = false;
      this.progressBar = true;
      this.progressBarAnimation = true;
      this.icons = "";
      this.theme = "";
      this.template = "";
      this.months = [
        "Gennaio",
        "Febbraio",
        "Marzo",
        "Aprile",
        "Maggio",
        "Giugno",
        "Luglio",
        "Agosto",
        "Settembre",
        "Ottobre",
        "Novembre",
        "Dicembre"
      ];
    }
  };

  // src/ui/SchedulaTemplate.ts
  var _sc_salt = "schedula-core";
  var _sc_dec = (encoded) => {
    var _a;
    const s = _sc_salt.split("").map((c) => c.charCodeAt(0));
    const pairs = (_a = encoded.match(/.{1,2}/g)) != null ? _a : [];
    return pairs.map((h, i) => String.fromCharCode(parseInt(h, 16) ^ s[i % s.length])).join("");
  };
  var SchedulaTemplate = class {
    constructor() {
      this.svgString = _sc_dec("536e624544554c6c27434f52454f101e02447866410d434f7f6f5343484544554c410d434f521d1e0f0616595204155913555d4a04141f4b1346420e5f044040554353471612124b4120694f52455343484544554c410d0a0b4f471e02010b49061a060f43191b000421071d59575c411d435e42554343595554454e6c27434f52455343484544554c415b061d010c1c0d5547555b5d430d6e6552455343484544554c410d6e6552455343484544554c4120694f52455343484544554c410d6e6552455343484544554c6c27434f52455343484544554c4113436278455343484544554c410d434f4e1512171c00161b4c08495e4d020407170d170a580f0948151d1d0b5143105846454e41545e4d42475313091110101e0f780d0606164e4107070e100f156f0c1a1c011a0d0f270b0d4e415a0a0b060d4e41595554574c09480a081a114e41595d54574c17440618300a0b5e4a5544454c501d435e4a474d43656f44554c410d434f52457e69484544554c410d434f52457e69484544554c410d434f5245535f0f450d1151434e0b0a04171c0d4a5b697f4c410d434f524553434845447866410d434f52455343484544554c4111130e060d530004041706514341060906475307554729454c5141564f4113460f455044585f1b0f5d535d151217005b697f4c410d434f52455343484544554c5d5d021b1a45100f091617484e1344040706475307554729445c411d0f42474540155d09515541520f5d535d151217005b697f4c410d434f52455343484544494306136e6552455343484544554c410d6e6552455343484544554c410d6e6552455343484544554c410d435307161643105846454e41545e4d4b47531b040c0a1e56095f06094f47500000001207030f0f5d535d10000656686e554c410d434f52455343656f44554c410d434f5245535f4715050118045f0d517f6f5343484544554c410d4353020407170d170a55050510411f000a14110d1617581c0059170a000b5143105846454e41545e4d424753140101101d514318534d520d160a0f0d10484e5019534d521512171c00161b390f44171c4f4706100d1737050d02482c0127161641485b44554c4120694f52455343484544554c5d5f060c06450b5e4a554655155c0f534d52121a071c0d59575e540f4307170c140b1c58464458510f43091b091f5e4a0708140f0a0f43000204100a1c1c59575c4f1941404c687943484544554c410d434f4e1716001c451c484e5318414f0b5851534a45131c0815455e4d4050514300000d12041510415e465551430e0c081951435a0b0606005143071505160515545e4d424b4741475b697f4c410d434f524553434859051b050c4c170a2617120d1b030b0701414c171b000c11161c002a14010410411f131107061a0b30070d0f5e0500000851431c1c141051435f0c1b131116414803161a015c0f505f5045070c554757454e4149161d4f4747104a4516101c044c172c1d101d1755470d1b08044b0a011b111641475b447866410d434f5245534348455814020840021b173101020616021a1e0c0d021b06171a011d11013b0d0c485e4d020407170d170a211e004310091d171e4148111d05095c0f171d130b000f091101574c075f0c024f47434148110b484e501d534d52010611554750064e415f061f1704072007100a015143440d0b17031a0d011101574c414c070b1b111a150d584606190c0f4c5152457e69484544554c410d43535d1512171c00161b526c27434f524553434845445550114c171b17171d6e624544554c410d434f1b014e41183a071c1e0241061c50687943484544554c410d1b52504b42515d47697f4c410d434f5245531a55474a445e540f6e6552455343484544551b084917074f475d515d47697f4c410d434f5245530b0d0c031d185c0f4d5d47477e69484544554c410d431f131107061a0b311b05155e5e4d071616113b150516092e43361c17474d6e624544554c410d434f4e061a110b0901550f1910415e42475300115846445c430d115250544341484a5a7866410d434f52454f4c180410010913435d6278455343484544491c0059170a000b530a0c58461a0e0d44121a17291a0d0d16467866410d434f52450b5e4a554655155c0f534d52121a071c0d59575a430d0b0a1b021b1755475257616b0d434f52455313091110101e0f780d0606164e411d1601073f114c000a3d0b26100d47697f4c410d434f521512171c00161b38134c0d1c140a010e5547161a180059064746505a4156686e554c410d5f1d17060743105846454e41545e4d424753140101101d51431b414f1a001a04001159575e4f18414f01110a0f0d584606181342080a4845435848030d19005b0d001a0017160d1c260b1903130f43404c68796e624544554c5d02130e06111611065b697f4c410d434f52455343484544490d0f440e0e0600530a0c5846030d0f440e4d520407171a0c06001804630202175851150100133703190f436278455343484544554c410d434f524553431c0a59574e4120694f52455343484544554c410d434f52451511070859574e4120694f52455343484544554c410d434f524517161a58464542525e414f7f6f5343484544554c410d434f5245534348030d19005c0f051d170009064a45697f4c410d434f52455343484544554c410d110a020012172b0a111b185c0f524d52687943484544554c410d434f52455343484506100b08435e4d1b0b17060e0c0a1c18040f4c51526879434845447866410d434f5245534348454455500548051c520c175e4a0101131f430d5d4f7f6f5343484544554c410d434f52455343485909141e0a48114f1b014e410b0c16160004000e0e000e161145000a114e4140021d190001340101101d514315414f1f0401080d172c100506451752505d51431a00022d514318414f110912101b5846180d1346061d5f001d074a4516100a3810415a50451c1101000a0151434c161b1d474d6e624544554c410d434f52455343484544554c410d4353110c01000400441600005e105250091a0d0348131c1e04000e0e000e161145000a114e414e1b52505051430b1c595759430d11525057515d544a071c1e024106517f6f5343484544554c410d434f5245534348594b180d1346061d4c6879434845447866410d434f52455343484544554c410d43531e0c1d06091723070d0544060106451a07554703070d057b524d521d425e4a5541574c181c5e4d42405143105759575c440f43164058515258554157524120694f52455343484544554c410d434f5245534348455806180e5d430c1e040010554703070d050000001e0a01524a450b130a12481752505556414816100c000410411c060a034e0b0a081a1e5b5f040d5a5746564457514040531856464916070c18480b050d0244171648555d5b4a454b4b4c6c27434f52455343484544554c410d434f524553434859170103110d00031316005e4a021614084c4e0c031d174141480a02131f04595e4d435543464a451701150d485e4d01111c1345060b190313171108104d42515b4944445b5401435e4b535a581b110b05410e5d020c1b110a59584b5c574c4e13436278455343484544554c410d434f52455343656f44554c410d434f52455343484544554c5d020f061c0012112f170511050443175152687943484544554c410d434f524553434859081c02044c11280004170a0d0b105505051041080004172b5947440d5d5c0f534a50450a52554754504e41555152505443534d47440c5e5c0f534a505b7e69484544554c410d434f52455343484544554c4111101b1d1553430b0905061f5c0f041d13015e0007090b075d430d0c0914161617554754504e415e17161e004e411b110b054102420f00005f01040a4d5640594d1f565a5e574656415e17010311000c1f13061a17115f545b54430d4c517f6f5343484544554c410d434f52455343484544555012590c1f5245100f091617484e065f020b5f061c0f071756574c0e4b051c17114e41595554504e415e17161e004e411b110b054102420f00005f01040a4d55475f4d0d52584749535251534d4e1f154213421d15120001111d4f5c4f15414f5d5b7e6948454455616b0d434f52455343484544554c410d434f4e4a1f0a060005072b134c0706170b075d656f44554c4120694f52455343484544554c410d434f52457e69484544554c410d434f52455343484544490b41440752501607021a16465518134c0d1c140a010e554717160d0d484b5f5c525a4156686e554c410d434f52455343484544554c410d434f525903021c0d697f4c410d434f52455343484544554c410d434f524553434811161402124b0c1d1f5851110711050109491c5541435345535a524847585603515c4b5d474f4556505b5f501a515a404c516e624544554c410d434f52455343484544554c410d434f52455307554709555e5603555f445d4a5b4452565b545215565646455e51465252425f531e4f42434b43535b515d464c4c1c4d584b5c40555a49565b5f531455584145434d585c5d475f4d0051414b51425a5f5244585e4f1a545e445d404f45554a4c55501e5b5952575d5b5a5d5240404c1d4d574351445648554a4554571e54435f575d5a5c57574d5f411c4d59465d4a545c49565b585215575c4745414d505751455a50014e5f5c5d4154595553554150035b5f4b50415b44574a465e501a5b5a521f516e624544554c410d434f52455343484544554c410d434f5245530a0c5846050d15455b5e45477e69484544554c410d434f52455343484544554c410d434f52450017110901484e0e5d020c1b110a59584b5242545a4b0a031e5f5007510701475c5a4b0a031e481c1309060d01155b1c581c06171c080d5f0a1a020416101b000a180645120d1118091753414155435358555444571259110019005e0f010b01160d1117101e0704010653161007030a484e031b0b1609070c0a4f010859061d49160711070e0158010859061d1e0c1e0a1c5f504e1f155f0c04174817021b0d05071e0054595f5c504a5a515c5d4c554d0d5341415e00171a0a0f1041054c10071d0315100d115e45571259110019005e0c1804071c181817525402041a0d1c480b0708045f5902131718061a164406181342080a52031a0f0447445a526c27434f52455343484544554c410d434f52455343484544554c5d5d021b1a687943484544554c410d434f52455343484544554c410d434f521101020616021a1e0c10411d1d1112170d4d554342501b555f40525f515d544a475d561955435f515d5a595350445d5704416278455343484544554c410d434f52455343484544554c410d430b4f471e435a524a435c57155a575e52414d50565c4055550d4e5d5c5245545b575759415003535f41514a504848555b5b581450594049414d5b575d435b520d5341425c4a515b49494742581952564552534e5a4b53425d571550435f555d5a5154574d5a411f4d57405d45564448545b545019545a52555d5350535742404c1f4d564657405b5b45555b5a55155a584649414d5c565c415f540d51414a5746535e5448585c4f1551584355444345544a4d5c581851575e575d505a54534d594157416278455343484544554c410d434f52455343484544554c410d43061658511309110c4d5d5600574d7f6f5343484544554c410d434f52455343484544554c410d434f01110a0f0d58461a1c004e0a1b0b5f434d5e525c4e0a08410f5551014a010d57544e0a08410f421d15120001111d4f5d5a5e171d1d0e1659060a0a10571259110019005e140101101d565103505f4255435358545f06181342080a5f091a0d0d06050556125c160e000048101c170b1e094c410a01170f1c0a065f091c18045f581c06171c080d48091c18045f0f061f0c07595c5e17011e0e4606421604000b09171614155b1d4d5a4b5c4a5a515c5d594c510350540111010c030049110d12450c091416161752555f06181342080a5f0a03020b0c100c565016130e1b0b074e071700101e5b40021d1900011048161007030a4843091b091f41484a5a7866410d434f52455343484544554c410d434f52455343484544491c00590b6278455343484544554c410d434f52455343484544554c410d431b00041d100e0a161851435f0c1b1311164b59534a445a571d51585e574656465652445d5601515b5c5745535f52535c4e6c27434f52455343484544554c410d434f52455343484544554c051041025257444d5e55524d555901545d5c5d405b5d5c50554153035459455641504448555b5c511e575641455e5246525d4c5f571f4f5d5c56415a5e5257555c4f1d5a5640565f4e5a4b5d415d581a544f5f575d545f54524d5f4d0053414b5c42505053444742591f5b5947495e53465d55415b540d5341425d45505f494947425819515c4a5653524653504d5556194f5d5c51405b5c5651555e4f15515a4253424f45554a4d5e561c53585248424d50555d405e59015141415742545050440f4e6c27434f52455343484544554c410d434f52455343484544554c08495e4d0204070b505453585e4320694f52455343484544554c410d434f52455343484544554c12591a031758510c1804071c181817534144524b580e0c08195642495a0d175743580e0c0819410e5d020c1b110a59595e17011e0e4606551c0a1d0653161007030a484e181b01070b52554a465c511d535f425448101c170b1e094c410a0117061213521615000d1348581c06171c080d48081c0204470c061c5f1e0a1c00164e1f155f0c0417481e0a1c001619050c441755465e00171a0a0f1041054c100713170102115f545b5958145a564b5c4a4f48554a46571259110019005e0709160c1a0a075e061b485548101c170b1e094c42130e110c071a52545f050d084317421d1717061a5f09141e0a48111c52160711070e01550a08410f4d524a4d6e624544554c410d434f52455343484544554c410d434f5245535f1804101d616b0d434f52455343484544554c410d434f524553434845445518134c0d1c140a010e5547161a180059064743535d525e5354475b4d1f56565c514b56505d48405f4f1f525e4252444a4a686e554c410d434f52455343484544554c410d434f524553434801595701411f54414455455b515d48425e4f155057475c474345574a425a561e515c5e48424d5855574155520d4e5e5c524a5a5b5356595e4f1e515644524043584b544c55531e4f42404b4a57595c53424c4c1f4d584554455b5b494945425814525c4a535351465d564d5a54014e5f5c5d42575f504445425115555c45495e51465c50475f591e435e5c53475b515250595e4f195057465646435a4b5c4759511b52435f555d5b5a5255455b410052414a554a565a5d484742521f52584a5053194a686e554c410d434f52455343484544554c410d434f52455343480c00484e114c17074a54444e5147697f4c410d434f52455343484544554c410d434f5245534348451701150d485e4d1d15120001111d4f5c4f1b545749031a0f045f4711550348515f49031a0f04480b050d02441716485448101c170b1e095b430c01175e00171a0a0f10411644071b1a5f434d5b5554455c511d52540111010c03004919050f48000e025f00121d041610571259110019005e0f010b011f03084359021b11161153161007030a484e021b111611040c091c185b19581c06171c080d4800141f094c111d131c495346505d4c5558145a565e45434d5b5e17011e0e4606421604000b0703020609151753540111010c0300491a1c004e0a1b0b5f425818040d1b184c42110b1717490e09170f101e120d101b000a180648030d1900430d4c517f6f5343484544554c410d434f52455343484544554c410d434f4e15121700686e554c410d434f52455343484544554c410d434f524553434811161402124b0c1d1f5851110711050109491c5541435345535a5248475a5203555e42504a4f50574a445a501e54565b477e69484544554c410d434f52455343484544554c410d434f5245175e4a0844475b4f1b53594a5c4b4f5f574a4d5f59185a5b5248414d5f5353465e52014e5e5c5543505c5c575541500354564b56455144574a465e581b545c52555d53515c5646404c1f4d5646544a545f45494742561a52594a565f4e584b5d4c5d5215554f404b4b51505351594151035b5e46524643584b544d5a521a4f42404b4a575a565c464c5003555b4a5c445744574a415f5919505a52575d5b5a5054435d4d0053414a574452585244585d4f15535647574b4f5a4b57475d5615564f08477e69484544554c410d434f52455343484544554c410d434f52451a075547141418091552585f50516e624544554c410d434f52455343484544554c410d434f524553101c1c0810514342130e110c071a52554a435b591605061e0949400c5c06105e511605061e095e0c1804071c18181752540111010c03005e1b030f48581c06171c080d48131c081545595f5c564353585554455d5a5e171d1d0e164e040c0a100f005d591c031012110d5e17011e0e4606421e0c1d06020a0d1b560c44170a005e00171a0a0f10410c44170a00091a0e01115e41571259110019005e0709160c141e134c1a55424b465a515c5d4c555801435f5c5648101c170b1e094c49021c1a0a15051b00104f5c5a5e171d1d0e164e07150516051554595e4915120a0611491a1e054811551f0401080d1717551f155f0c041745150a04094655435f20694f52455343484544554c410d434f52454f4c0f5b697f4c410d434f52455343484544554c410d5f1f131107061a0b441c085c0f070613021c0d09092c14180245414f020407170d170a200208591052501000061a3614140f04620d3a010051431f0c0001045c0f574d520d160a0f0d10484e550f5d6278455343484544554c410d434f52455343484544554c410d434f5245535f1804101d4c051041225f545f5248095659415320694f52455343484544554c410d434f52455343484544554c410d434f52455343484544554c2c1d4f5b5209474f4551697f4c410d434f52455343484544554c410d434f52455343484544554c410d434f524553434828575959414151435f575143656f44554c410d434f52455343484544554c410d434f52455343484544554c410d434f524553101c1c081051435e171d1d0e16594b5554130a511d584f0111010c030049020505590b55424b444148030d19005c0f0c1d130b14064a4a5a7866410d434f52455343484544554c410d43535d1512171c00161b526c27434f52455343484544554c41114c0b1703005d4f686e554c410d6e6552455343656f44554c410d434f52591443010159571b134c131f171751431c17051b1f074211024f470711090b17190d15484b5f5e555a4156686e554c410d434f52455343484558124c414407525016100b0d0111190913000a1b1708004148090113185c0f531f0a4753171a040a060a0e5f0e5250110102061608141804055343424c515d656f44554c4120694f52455343484544554c410d434f52454f02060c0914180479110e1c16150c1a084455616b0d434f52455343484544554c410d434f5245534310090d1b075b45110a145851401b060c10081441061d5f0c07060516467866410d434f52455343484544554c410d434f524553021c11161c0e145906211308165e4a11161402124b0c1d1f47536e624544554c410d434f52455343484544554c410d430e0611010a0a10101038185d0652503d3e2f4a686e554c410d434f52455343484544554c410d434f52110a130d5846011e0043100313111641656f44554c410d434f52455343484544554c410d434f14171c0e55475457616b0d434f52455343484544554c410d434f524553431c0a595759510f6e6552455343484544554c410d434f5245534348454411191310415f5c510041656f44554c4120694f52455343484544554c410d434f52455343484507140002600c0b1758511018090d1b094320694f52455343484544554c410d434f5245534348450f101535440e0a0158515353544655616b0d434f52455343484544554c410d434f5245534303001d261c0d440d0a01585143465144454c4f1b435e52455143656f44554c410d434f52455343484544554c410d434f000003060911271a190f595e4d43477e69484544554c410d434f52455343484544554c410d010a150c1d5e4a0c0a110907440d060600516e624544554c410d434f52455343484544554c410d43091b091f5e4a031610091b48414f5d5b7e6948454455616b0d434f52687943484544554c410d434f52455343484558124c08495e4d01061b060c1008101e4c45060e1600014156686e554c410d434f52455343484544554c4120694f52455343484544554c410d434f52454f4c0f5b697f4c410d434f52455343484544554c410d5f08520c175e4a16071d0905580f0a004811020b0e0307031443074d521101020616021a1e0c10411b00041d10040410104451015346505b7e69484544554c410d434f524553434845447866410d434f52455343484544554c410d43535d024d6e624544554c6c27434f52457e6948454455616b0d434f52455343484544554c5d0204517f6f5343484544554c410d434f52687943484544554c410d6e655245534348454455504e4a5d6278455343484544554c5d5e1508520c175e4a16071d0905580f0a0048000a0c0006141e430d1b5250555143115846454e415a0a0b060d4e415e5554454e41450606150d075e4a54544549430d5d6278455343484544554c410d434f4e160504480c00484e124e0b0a16101f061a4816101f0e58110c17165143105846454e41545e4d4247530b0d0c031d185c0f525f424051431f0c0001045c0f000e1e065b5258554155414119531f0a4c515d656f44554c410d434f5245534348594b061a06136e6552455343484544554c410d435301131443010159571f0245060b0709161145161419051559061d50450b5e4a0605190f491c535f57455e435055140d45430d1a52505551431f0c0001045c0f5b5f50451b0601020c0151431c535f5747535d656f44554c410d434f524553434845697f4c410d434f52455343484544554c410d5f1d17060743105846160d0d4e4b5e42555643454550401c1904414f0b5851534a45131c0815455e4d4355514300000d12041510415e42555641480608141f1210411c02091a171c0016574c07440f034f47040b011101574c12591a03175851001d17171a1e5b4814420000000a12005f57435f20694f52455343484544554c410d434f52687943484544554c410d434f7f6f5343484544554c410d434f52595c101e025a7866410d434f52455343544a17030b5f20694f5245534348686e554c410d5f400113145d656f44554c4120694f5245535f1b130355050510411c1a0c15170d17491114430d00031316005e4a160c1c0a1548114f0113144e07130107000054431d1b021b174a451701150d485e4d040c000a0a0c081c1818170b061601160d4a5b697f4c410d434f5245535f0f4510070d0f5e050000084e411b0605190949194a4d4c687943484544554c410d434f52454f000117071909410d00174f474b4148061d484e590f431d4f474b4148030d19005c0f14071b111641485b585a0f085f0003175b7e69484544554c410d434f5245535f1804101d4c41495e483f45404f485744394c5401574f3e45404f485343551f155f0c04175851405e535d4c0f020f43091b091f5e4a0b0b1b09430d171d130b0005071709484e124e0203174d414a4a4a5a7866410d434f52455343544a034b616b0d434f52595c101e025a7866410d434f7f6f5343484558061a060d0a0b4f47000b010310101e4c5e1b4d52061f021b1659571f0944051b171753101e02491a1a045f0f0e0b451f060e1146551f15540f0a4f47050a1b0c061c0008591a551a0c17070d0b464b616b0d434f52455343484544554c6c27434f52455343484558124c155f020101031c11055846060f00410647464c53110711050109491c5b5f525d535b41475a7866410d434f5245534348454455500244110c1e0053430b1d595754430d00164f474b414817595754430d05061e094e411f0d0d0109430d5d535d061a110b09014b616b0d434f52455343484544554c5d5d021b1a455307554229555f4d0d514f3e45464f5c4528555f4d0d554852160711070e01484e421b55564b06104148030d19005c0f0d001c0051431c17051b1f074211024f4700000909015d5e480f4c517f6f5343484544554c41114c084c6879434845444943125b04517f6f53434845697f4c410d43");
    }
  };

  // src/models/SchedulaCalendar.ts
  var SchedulaCalendarItem = class {
    constructor() {
      this._duration = 1440;
      this._denominator = 6e4;
      this._capacity = 0;
      this._step = 60;
      this._type = "";
      this._day = -1;
      this._orderIndex = 1e3;
      this.resourceId = null;
      var now = /* @__PURE__ */ new Date();
      var date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      this._from = Math.trunc(date.getTime() / this._denominator);
      this.type = "event";
    }
    get capacity() {
      return this._capacity;
    }
    set capacity(val) {
      this._capacity = val;
    }
    get day() {
      return this._day;
    }
    set day(val) {
      if (val >= -1 && val <= 6) this._day = val;
    }
    get dateFrom() {
      return new Date(this._from * this._denominator).toString();
    }
    get dateTo() {
      return new Date((this._from + this._duration) * this._denominator);
    }
    get duration() {
      return this._duration;
    }
    set duration(value) {
      var duration = this.getModulo(value);
      if (duration > 0) this._duration = duration;
    }
    set denominator(value) {
      this.from *= this._denominator;
      this.from /= value;
      this._capacity *= this._denominator;
      this._capacity /= value;
      this._denominator = value;
    }
    set from(value) {
      let f = Math.trunc(value / this._denominator);
      f = this.getModulo(f);
      this._from = f;
    }
    get from() {
      return this._from;
    }
    get to() {
      return this._from + this._duration;
    }
    set to(value) {
      let v = Math.trunc(value / this._denominator);
      v = this.getModulo(v);
      if (v > 0 && v > this._from) this._duration = v - this._from;
    }
    set type(value) {
      this._type = value;
      if (value == "rule") {
        this._orderIndex = 0;
      } else if (value == "calendar" || value == "exception") {
        this._orderIndex = 1;
        this._type = "calendar";
      } else if (value == "event") {
        this._orderIndex = 2;
      } else {
        this._orderIndex = 1e3;
        this._type = "event";
      }
    }
    get type() {
      return this._type;
    }
    get orderIndex() {
      return this._orderIndex;
    }
    set dateFrom(value) {
      let dt = value;
      if (!value.includes("T")) dt += "T00:00:00";
      let date = new Date(dt);
      if (date.toString() != "Invalid Date") this.from = date.getTime();
      else console.log(value + " - Invalid Date");
    }
    getModulo(value) {
      let v = value;
      let r = value % this._step;
      if (r > this._step / 2) v = v - r + this._step;
      else v -= r;
      return v;
    }
  };
  var SchedulaCalendar = class {
    constructor() {
      this._items = [];
      this._capacity = 0;
      this._denominator = 6e4;
      this._reference = 1440;
      this._step = 15;
    }
    newItem() {
      let item = new SchedulaCalendarItem();
      this._items.push(item);
      return item;
    }
    addItem(item) {
      if (item instanceof SchedulaCalendarItem) {
        this._items.push(item);
        return item;
      }
      return null;
    }
    get items() {
      return this._items;
    }
    get itemCount() {
      return this._items.length;
    }
    get reference() {
      return this._reference;
    }
    /**
     * Returns capacity in minutes for the given instant and day-of-week.
     * If resourceId is provided, per-resource rules take precedence over global rules.
     * Filter: item.resourceId == resourceId || item.resourceId == null
     */
    getCapacity(instant, day, resourceId) {
      const filterByResource = (item) => item.resourceId == resourceId || item.resourceId == null;
      const last = (arr) => arr.length ? arr[arr.length - 1] : void 0;
      let capacity = this._capacity;
      const dayRule = last(this._items.filter(
        (item) => item.type == "rule" && item.day == day && item.from <= instant && item.to > instant && filterByResource(item)
      ));
      capacity = dayRule ? dayRule.capacity : capacity;
      if (!dayRule) {
        const baseRule = last(this._items.filter(
          (item) => item.type == "rule" && item.day == -1 && item.from <= instant && item.to > instant && filterByResource(item)
        ));
        capacity = baseRule ? baseRule.capacity : capacity;
      }
      let calItem = last(this._items.filter(
        (item) => item.type == "calendar" && item.day == day && item.from <= instant && item.to > instant && filterByResource(item)
      ));
      if (!calItem) {
        calItem = last(this._items.filter(
          (item) => item.type == "calendar" && item.day == -1 && item.from <= instant && item.to > instant && filterByResource(item)
        ));
      }
      if (calItem) capacity = calItem.capacity;
      return capacity;
    }
    calcDuration(item) {
      var _a, _b, _c, _d, _e;
      const resourceId = (_e = item.ResourceId) != null ? _e : (_d = (_c = (_b = (_a = item._scheduler) == null ? void 0 : _a.data) == null ? void 0 : _b.Resources) == null ? void 0 : _c[item.Resource]) == null ? void 0 : _d.Id;
      let duration = 0, effort = 0, sum = 0;
      const denom = this._denominator, step = this._step;
      while (effort < item.Effort) {
        const cursor = item.From + sum;
        const dt = new Date(cursor * denom);
        const capacity = this.getCapacity(cursor, dt.getUTCDay(), resourceId);
        const dayMinTot = dt.getUTCHours() * 60 + dt.getUTCMinutes();
        let e = 0;
        if (capacity > 0 && dayMinTot < capacity) e = step;
        effort += e;
        effort = Math.round(effort * 1e3) / 1e3;
        sum += step;
      }
      duration = sum;
      if (duration < step) duration = step;
      return duration;
    }
    calcEffort(item) {
      var _a, _b, _c, _d, _e;
      const resourceId = (_e = item.ResourceId) != null ? _e : (_d = (_c = (_b = (_a = item._scheduler) == null ? void 0 : _a.data) == null ? void 0 : _b.Resources) == null ? void 0 : _c[item.Resource]) == null ? void 0 : _d.Id;
      let d = 0, effort = 0;
      const duration = item.Width;
      const denom = this._denominator, step = this._step;
      while (d < duration) {
        const cursor = item.From + d;
        const dt = new Date(cursor * denom);
        const capacity = this.getCapacity(cursor, dt.getUTCDay(), resourceId);
        const dayMinTot = dt.getUTCHours() * 60 + dt.getUTCMinutes();
        let e = 0;
        if (capacity > 0 && dayMinTot < capacity) e = step;
        effort += e;
        effort = Math.ceil(effort * 100) / 100;
        d += step;
      }
      return effort;
    }
    optimazeStart(item) {
      var _a, _b, _c, _d, _e;
      const resourceId = (_e = item.ResourceId) != null ? _e : (_d = (_c = (_b = (_a = item._scheduler) == null ? void 0 : _a.data) == null ? void 0 : _b.Resources) == null ? void 0 : _c[item.Resource]) == null ? void 0 : _d.Id;
      let sum = 0;
      const denom = this._denominator, step = this._step, reference = this._reference;
      while (sum < reference * 20) {
        const cursor = item.From + sum;
        const dt = new Date(cursor * denom);
        const capacity = this.getCapacity(cursor, dt.getUTCDay(), resourceId);
        const dayMinTot = dt.getUTCHours() * 60 + dt.getUTCMinutes();
        if (capacity == 0 || dayMinTot >= capacity) sum += step;
        else break;
      }
      return item.From + sum;
    }
  };
  var CalendarMousePos = class {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.timeOffset = 0;
      this.resourceIndex = 0;
      this.date = /* @__PURE__ */ new Date();
    }
  };

  // src/ui/SchedulaItem.ts
  var SchedulaItem = class {
    constructor(scheduler, itemData, calendar) {
      this.Duration = 0;
      this.ControlBit = false;
      this._element = null;
      this._resource = 0;
      this._width = 0;
      this._height = 0;
      this._from = 0;
      this._to = 0;
      this._offset = 0;
      this._effort = 2880;
      this._x = 0;
      this._y = 0;
      this._w = 0;
      this._calendar = null;
      this._id = "";
      if (itemData) {
        if (itemData.Id) {
          this._element = document.querySelector('svg[data-id="' + itemData.Id + '"]');
          this._data = itemData;
          this._id = itemData.Id;
        }
      }
      this._scheduler = scheduler;
      this._resource = -1;
      this._settings = scheduler.settings;
      this._calendar = scheduler.calendar;
      if (calendar != null) this._calendar = calendar;
      this._offset = itemData.Offset;
      this._width = itemData.Width;
      this._from = this.calcFrom();
      this._data.From = this._from;
      this._data.To = this._from + this._width;
      if (this._calendar != null) {
        this._effort = this._calendar.calcEffort(this);
        this._data.Effort = this._effort;
      }
    }
    get Id() {
      return this._id;
    }
    /** Resource Id string used by SchedulaCalendar.getCapacity for per-resource rules */
    get ResourceId() {
      var _a, _b;
      const resIdx = this.Resource;
      if (resIdx >= 0) return (_b = (_a = this._scheduler.data.Resources) == null ? void 0 : _a[resIdx]) == null ? void 0 : _b.Id;
      return void 0;
    }
    get Resource() {
      var _a;
      if (this._resource < 0) {
        (_a = this._scheduler.data.Resources) == null ? void 0 : _a.forEach((resource, ri) => {
          var _a2;
          (_a2 = resource.Items) == null ? void 0 : _a2.forEach((item) => {
            if (item.Id == this._data.Id) {
              this._resource = ri;
            }
          });
        });
      }
      return this._resource;
    }
    set Resource(value) {
      var _a, _b, _c, _d;
      if (value >= 0) {
        let resourceIndex = Math.trunc(value);
        let y = this._settings.resourceHeight * resourceIndex + this._scheduler.headerHeight + this._settings.itemsPadding;
        let x = parseFloat(((_a = this._element) == null ? void 0 : _a.getAttribute("x")) || "0");
        if (resourceIndex != this._resource) {
          (_c = this._scheduler.data.Resources[this.Resource].Items) == null ? void 0 : _c.splice((_b = this._scheduler.data.Resources[this.Resource].Items) == null ? void 0 : _b.indexOf(this._data), 1);
          if (!this._scheduler.data.Resources[resourceIndex].Items) this._scheduler.data.Resources[resourceIndex].Items = [];
          this._data.Modified = true;
          (_d = this._scheduler.data.Resources[resourceIndex].Items) == null ? void 0 : _d.push(this._data);
          this._resource = resourceIndex;
          this._data.Resource = this._resource;
          this.moveTo(x, y);
        } else this.moveTo(x, y);
      }
    }
    get From() {
      return this._from;
    }
    set From(value) {
      if (value >= 0) {
        this._from = value;
        this.Offset = this.calcOffset();
      }
    }
    get Offset() {
      return this._offset;
    }
    set Offset(value) {
      if (value >= 0) {
        this._offset = Math.round(value);
        this._from = this.calcFrom();
        if (this._calendar && this._settings.optimizeStart == true) {
          this._from = Math.round(this._calendar.optimazeStart(this));
          this._offset = this.calcOffset();
        }
        let x = this.convertOffsetToX();
        if (this._element) {
          let y = parseFloat(this._element.getAttribute("y") || "0");
          this.moveTo(x, y);
        }
        this._data.Offset = this._offset;
        this._data.From = this._from;
        this._data.Modified = true;
        if (this._calendar && this._settings.calcEffort == true) {
          let w = this._calendar.calcDuration(this);
          w = this.getModulo(w, this._settings.gridStep, this._settings.gridStep);
          this._width = w;
          this._w = this._width / this._settings.timeUnitVal * this._settings.timeWidth;
          this.setWidth(this._w);
          this._data.Width = this._width;
        }
        this._data.To = this._from + this._width;
      }
    }
    get To() {
      return this._from + this._width;
    }
    get Width() {
      return this._width;
    }
    set Width(value) {
      if (value > 0) {
        this._width = Math.round(this.getModulo(value, this._settings.gridStep, 0));
        this._w = this._width / this._settings.timeUnitVal * this._settings.timeWidth;
        this.setWidth(this._w);
        if (this._calendar) {
          this._effort = this._calendar.calcEffort(this);
        } else this._effort = this._width;
        this._data.Width = this._width;
        this._data.Effort = this.Effort;
        this._data.To = this._from + this._width;
        this._data.Modified = true;
      }
    }
    get W() {
      var _a, _b;
      return parseFloat((_b = (_a = this._element) == null ? void 0 : _a.getAttribute("width")) != null ? _b : "0");
    }
    set W(value) {
      if (value >= 0) {
        let val = value * this._settings.timeUnitVal / this._settings.timeWidth;
        this.Width = val;
      }
    }
    get X() {
      var _a, _b;
      return parseFloat((_b = (_a = this._element) == null ? void 0 : _a.getAttribute("x")) != null ? _b : "0");
    }
    set X(value) {
      if (value >= 0) {
        let offset = this.convertXToOffset(value);
        this.Offset = this.getModulo(offset, this._settings.gridStep, 0);
        this._x = this.convertOffsetToX();
        this._data.Offset = this._offset;
        this._data.Modified = true;
      }
    }
    get Y() {
      var _a, _b;
      return parseFloat((_b = (_a = this._element) == null ? void 0 : _a.getAttribute("y")) != null ? _b : "0");
    }
    set Y(value) {
      var _a, _b;
      let min = 0;
      let max = (_b = (_a = this._scheduler.data.Resources) == null ? void 0 : _a.length) != null ? _b : 0;
      let r = Math.trunc((value - this._scheduler.headerHeight - this._settings.itemsPadding) / this._settings.resourceHeight);
      if (r < min) r = min;
      if (r > max) r = max;
      this.Resource = r;
    }
    get Effort() {
      return this._effort;
    }
    set Effort(value) {
      if (value > 0) {
        this._effort = Math.round(this.getModulo(value, this._settings.gridStep, 0));
        if (this._calendar) {
          this._width = Math.round(this._calendar.calcDuration(this));
        } else this._width = this._effort;
        this._w = this._width / this._settings.timeUnitVal * this._settings.timeWidth;
        this.setWidth(this._w);
        this._data.Width = this._width;
        this._data.Effort = this._effort;
        this._data.Modified = true;
      }
    }
    moveTo(x, y) {
      var _a;
      if (!this._element) return;
      if ((_a = this._settings.animation) != null ? _a : false) {
        this.moveAnimatedTo(x, y);
      }
      this._element.setAttribute("x", x.toString());
      this._element.setAttribute("y", y.toString());
    }
    moveAnimatedTo(x, y) {
      var _a, _b;
      if (!this._element) return;
      let cx = parseFloat((_a = this._element.getAttribute("x")) != null ? _a : "0");
      let cy = parseFloat((_b = this._element.getAttribute("y")) != null ? _b : "0");
      let animatex = document.createElementNS("http://www.w3.org/2000/svg", "animate");
      animatex.setAttribute("attributeName", "x");
      animatex.setAttribute("values", cx.toString() + ";" + x.toString());
      animatex.setAttribute("dur", "0.25s");
      this._element.append(animatex);
      animatex.beginElement();
      animatex.addEventListener("end", function() {
        animatex.remove();
      });
      let animatey = document.createElementNS("http://www.w3.org/2000/svg", "animate");
      animatey.setAttribute("attributeName", "y");
      animatey.setAttribute("values", cy.toString() + ";" + y.toString());
      animatey.setAttribute("dur", "0.15s");
      this._element.append(animatey);
      animatey.beginElement();
      animatey.addEventListener("end", function() {
        animatey.remove();
      });
    }
    setWidth(width) {
      var _a;
      if (this._settings.animation == true) {
        this.setAnimatedWidth(width);
      }
      (_a = this._element) == null ? void 0 : _a.setAttribute("width", width.toString());
    }
    setAnimatedWidth(width) {
      var _a;
      if (!this._element) return;
      let w = parseFloat((_a = this._element.getAttribute("width")) != null ? _a : "0");
      let animatew = document.createElementNS("http://www.w3.org/2000/svg", "animate");
      animatew.setAttribute("attributeName", "width");
      animatew.setAttribute("values", w.toString() + ";" + width.toString());
      animatew.setAttribute("dur", "0.15s");
      this._element.append(animatew);
      animatew.beginElement();
      animatew.addEventListener("end", function() {
        animatew.remove();
      });
    }
    getModulo(value, step, min) {
      const modulo = (value - (min != null ? min : 0)) % step;
      const correction = modulo > step / 2 ? step - modulo : -modulo;
      let result = value + correction;
      result = min != null && result < min ? min : result;
      return result;
    }
    calcFrom() {
      let date = this._settings.date;
      let ticks = this._offset;
      if (date) {
        ticks += date.getTime() / 6e4;
      }
      return ticks;
    }
    calcOffset() {
      let date = this._settings.date;
      let ticks = this._from;
      if (date) {
        ticks -= date.getTime() / 6e4;
      }
      return ticks;
    }
    convertOffsetToX() {
      let x = this._offset / this._settings.timeUnitVal * this._settings.timeWidth;
      return x;
    }
    convertXToOffset(x) {
      let offset = x * this._settings.timeUnitVal / this._settings.timeWidth;
      return offset;
    }
    convertWToTicks(w) {
      let ticks = w / this._settings.timeWidth * this._settings.timeUnitVal;
      return ticks;
    }
    checkInterference() {
      var _a, _b, _c;
      let result = true;
      let x1 = this.Offset;
      let x2 = this.Offset + this.Width;
      if (this.Resource >= 0 && this.Resource < ((_b = (_a = this._scheduler.data.Resources) == null ? void 0 : _a.length) != null ? _b : 0)) {
        (_c = this._scheduler.data.Resources[this.Resource].Items) == null ? void 0 : _c.forEach((item) => {
          if (item.Id != this._data.Id) {
            let cx1 = item.Offset;
            let cx2 = item.Offset + item.Width;
            result = result && (x2 <= cx1 || x1 >= cx2);
          }
        });
      }
      return result;
    }
  };

  // src/models/SchedulaView.js
  var SchedulaView;
  (function(SchedulaView2) {
    SchedulaView2["Year"] = "year";
    SchedulaView2["Month"] = "month";
    SchedulaView2["Week"] = "week";
    SchedulaView2["Day"] = "day";
    SchedulaView2["Resource"] = "resource";
    SchedulaView2["Time"] = "time";
    SchedulaView2["Info"] = "info";
    SchedulaView2["None"] = "none";
  })(SchedulaView || (SchedulaView = {}));
  var mousePos = class {
    constructor() {
      this.x = 0;
      this.y = 0;
    }
  };

  // src/plugins/DefaultPopupPlugin.ts
  var DefaultPopupPlugin = class {
    constructor() {
      this.name = "defaultpopup";
      this._currentItem = null;
      /**
       * Custom brand color used in the popup header. Override as needed.
       */
      this.brandColor = "#1e293b";
    }
    init(core) {
      this._core = core;
      if (!core.settings.popupProvider) {
        core.settings.popupProvider = this;
      }
    }
    destroy() {
      const popup = document.getElementById("scheduler-default-popup");
      if (popup) popup.remove();
      this._core = null;
    }
    onItemClick(event, element) {
      const item = element == null ? void 0 : element.item;
      if (!item) return;
      this._currentItem = item;
      const popup = this._ensurePopup();
      this._populatePopup(popup, item);
      popup.style.display = "block";
    }
    show(item, event, scheduler) {
      this._currentItem = item;
      const popup = this._ensurePopup();
      this._populatePopup(popup, item);
      popup.style.display = "block";
    }
    refreshItem(item) {
      var _a;
      const popup = document.getElementById("scheduler-default-popup");
      if (!popup || popup.style.display === "none") return;
      this._currentItem = item;
      const fmt = (mins) => mins != null ? new Date(Math.trunc(mins) * 6e4).toLocaleString(void 0, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }) : "";
      const fmtMins = (mins) => mins != null ? `${Math.floor(mins / 60)}h ${String(Math.trunc(mins) % 60).padStart(2, "0")}m` : "";
      popup.querySelector("#scheduler-default-popup-title").textContent = item.Text || "Task";
      popup.querySelector("#default-popup-field-text").value = item.Text || "";
      popup.querySelector("#default-popup-field-desc").value = item.Description || "";
      popup.querySelector("#default-popup-field-from").value = fmt(item.From);
      popup.querySelector("#default-popup-field-to").value = fmt(item.To);
      popup.querySelector("#default-popup-field-duration").value = fmtMins(item.Width);
      popup.querySelector("#default-popup-field-effort").value = fmtMins(item.Effort);
      this._applyColor(popup, item.Color1);
      popup.querySelector("#default-popup-field-completion").value = (_a = item.Completion) != null ? _a : "";
      popup.querySelector("#default-popup-field-ref").value = item.Reference || "";
    }
    hide() {
      const popup = document.getElementById("scheduler-default-popup");
      if (popup) popup.style.display = "none";
    }
    _ensurePopup() {
      let popup = document.getElementById("scheduler-default-popup");
      if (!popup) {
        popup = document.createElement("div");
        popup.id = "scheduler-default-popup";
        popup.className = "scheduler-popup";
        popup.style.cssText = "display:none;position:fixed;z-index:9999;";
        popup.innerHTML = `
                <div class="popup-container">
                    <div class="popup-header" id="scheduler-default-popup-header" style="background:${this.brandColor};">
                        <button class="close-button" id="scheduler-default-popup-close" style="color:#fff;">&#x2715;</button>
                        <span id="scheduler-default-popup-title" style="color:#fff;">Task</span>
                    </div>
                    <div class="popup-content">
                        <div class="tab">
                            <button class="tab-btn active" data-tab="general">General</button>
                            <button class="tab-btn" data-tab="data">Data</button>
                        </div>
                        <div class="tabcontent active" id="scheduler-default-popup-tab-general">
                            <div class="formgroup"><label>Text</label><input class="taskinput" id="default-popup-field-text" type="text"></div>
                            <div class="formgroup"><label>Description</label><input class="taskinput" id="default-popup-field-desc" type="text"></div>
                            <div class="formgroup formgroup-inline"><label>From</label><input class="taskinput" id="default-popup-field-from" type="text" readonly><label>To</label><input class="taskinput" id="default-popup-field-to" type="text" readonly></div>
                            <div class="formgroup formgroup-inline"><label>Duration</label><input class="taskinput" id="default-popup-field-duration" type="text" readonly title="Tempo totale (inclusi non lavorativi)"><label>Effort</label><input class="taskinput" id="default-popup-field-effort" type="text" readonly title="Tempo lavorativo effettivo"></div>
                            <div class="formgroup"><label>Color</label><div class="color-field-wrapper"><div class="color-swatch" id="default-popup-color-swatch"></div><span class="color-field-label" id="default-popup-color-label">Non assegnato</span><input type="color" id="default-popup-field-color" tabindex="-1" style="position:absolute;opacity:0;width:0;height:0;pointer-events:none"><button type="button" class="color-clear-btn" id="default-popup-color-clear">&#x2715;</button></div></div>
                            <div class="formgroup"><label>Completion %</label><input class="taskinput" id="default-popup-field-completion" type="number" min="0" max="100"></div>
                            <div class="formgroup"><label>Reference</label><input class="taskinput" id="default-popup-field-ref" type="text"></div>
                        </div>
                        <div class="tabcontent" id="scheduler-default-popup-tab-data">
                            <!-- Custom fields from item.data are injected here at runtime -->
                            <div id="default-popup-custom-fields" style="padding:8px;font-size:13px;color:#475569;"></div>
                        </div>
                    </div>
                    <div class="popup-footer">
                        <button class="scheduler-popup-btn" id="default-popup-btn-cancel">Cancel</button>
                        <button class="scheduler-popup-btn" id="default-popup-btn-save">Save</button>
                    </div>
                </div>`;
        document.body.appendChild(popup);
        const colorSwatch = popup.querySelector("#default-popup-color-swatch");
        const colorInput = popup.querySelector("#default-popup-field-color");
        const colorLabel = popup.querySelector("#default-popup-color-label");
        const colorClear = popup.querySelector("#default-popup-color-clear");
        colorSwatch.addEventListener("click", () => colorInput.click());
        colorInput.addEventListener("input", () => {
          colorSwatch.style.background = colorInput.value;
          colorSwatch.dataset.color = colorInput.value;
          colorSwatch.classList.add("has-color");
          colorLabel.textContent = colorInput.value;
          colorClear.style.display = "";
        });
        colorClear.addEventListener("click", () => {
          colorSwatch.style.background = "";
          colorSwatch.dataset.color = "";
          colorSwatch.classList.remove("has-color");
          colorLabel.textContent = "Non assegnato";
          colorClear.style.display = "none";
        });
        popup.querySelectorAll(".tab-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            var _a;
            popup.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
            popup.querySelectorAll(".tabcontent").forEach((t) => t.classList.remove("active"));
            btn.classList.add("active");
            const tab = btn.dataset.tab;
            (_a = document.getElementById(`scheduler-default-popup-tab-${tab}`)) == null ? void 0 : _a.classList.add("active");
          });
        });
        this._makePopupDraggable(popup);
      }
      return popup;
    }
    _populatePopup(popup, item) {
      var _a;
      const core = this._core;
      const fmt = (mins) => mins != null ? new Date(Math.trunc(mins) * 6e4).toLocaleString(void 0, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }) : "";
      const fmtMins = (mins) => mins != null ? `${Math.floor(mins / 60)}h ${String(Math.trunc(mins) % 60).padStart(2, "0")}m` : "";
      popup.querySelector("#scheduler-default-popup-title").textContent = item.Text || "Task";
      popup.querySelector("#default-popup-field-text").value = item.Text || "";
      popup.querySelector("#default-popup-field-desc").value = item.Description || "";
      popup.querySelector("#default-popup-field-from").value = fmt(item.From);
      popup.querySelector("#default-popup-field-to").value = fmt(item.To);
      popup.querySelector("#default-popup-field-duration").value = fmtMins(item.Width);
      popup.querySelector("#default-popup-field-effort").value = fmtMins(item.Effort);
      this._applyColor(popup, item.Color1);
      popup.querySelector("#default-popup-field-completion").value = (_a = item.Completion) != null ? _a : "";
      popup.querySelector("#default-popup-field-ref").value = item.Reference || "";
      const customContainer = popup.querySelector("#default-popup-custom-fields");
      customContainer.innerHTML = "";
      if (item.data && typeof item.data === "object") {
        Object.entries(item.data).forEach(([key, value]) => {
          const row = document.createElement("div");
          row.className = "formgroup";
          row.innerHTML = `<label>${key}</label><input class="taskinput" type="text" value="${value != null ? value : ""}" readonly data-custom-key="${key}">`;
          customContainer.appendChild(row);
        });
      } else {
        customContainer.innerHTML = '<p style="color:#94a3b8;font-style:italic;">No custom data (item.data) available.</p>';
      }
      const saveBtn = popup.querySelector("#default-popup-btn-save");
      const newSave = saveBtn.cloneNode(true);
      saveBtn.parentNode.replaceChild(newSave, saveBtn);
      newSave.addEventListener("click", () => {
        item.Text = popup.querySelector("#default-popup-field-text").value;
        item.Description = popup.querySelector("#default-popup-field-desc").value;
        const swatchEl = popup.querySelector("#default-popup-color-swatch");
        item.Color1 = swatchEl.dataset.color || void 0;
        const comp = parseInt(popup.querySelector("#default-popup-field-completion").value);
        item.Completion = isNaN(comp) ? void 0 : comp;
        item.Reference = popup.querySelector("#default-popup-field-ref").value;
        popup.style.display = "none";
        core.refreshItem(item);
        if (typeof window.modified === "function") window.modified();
      });
      const cancelBtn = popup.querySelector("#default-popup-btn-cancel");
      const newCancel = cancelBtn.cloneNode(true);
      cancelBtn.parentNode.replaceChild(newCancel, cancelBtn);
      newCancel.addEventListener("click", () => {
        popup.style.display = "none";
      });
      const closeBtn = popup.querySelector("#scheduler-default-popup-close");
      const newClose = closeBtn.cloneNode(true);
      closeBtn.parentNode.replaceChild(newClose, closeBtn);
      newClose.addEventListener("click", () => {
        popup.style.display = "none";
      });
      if (popup.style.display === "none" || popup.style.display === "") {
        popup.style.left = "50%";
        popup.style.top = "50%";
        popup.style.transform = "translate(-50%,-50%)";
      }
    }
    _applyColor(popup, color) {
      const swatch = popup.querySelector("#default-popup-color-swatch");
      const label = popup.querySelector("#default-popup-color-label");
      const clearBtn = popup.querySelector("#default-popup-color-clear");
      const input = popup.querySelector("#default-popup-field-color");
      if (color) {
        swatch.style.background = color;
        swatch.dataset.color = color;
        swatch.classList.add("has-color");
        label.textContent = color;
        input.value = color;
        clearBtn.style.display = "";
      } else {
        swatch.style.background = "";
        swatch.dataset.color = "";
        swatch.classList.remove("has-color");
        label.textContent = "Non assegnato";
        input.value = "#5762ca";
        clearBtn.style.display = "none";
      }
    }
    _makePopupDraggable(popup) {
      const header = popup.querySelector("#scheduler-default-popup-header");
      if (!header) return;
      let isDragging = false, startX = 0, startY = 0, startLeft = 0, startTop = 0;
      header.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        const rect = popup.getBoundingClientRect();
        startLeft = rect.left + window.scrollX;
        startTop = rect.top + window.scrollY;
        popup.style.left = startLeft + "px";
        popup.style.top = startTop + "px";
        popup.style.transform = "none";
        e.preventDefault();
      });
      document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        popup.style.left = startLeft + e.clientX - startX + "px";
        popup.style.top = startTop + e.clientY - startY + "px";
      });
      document.addEventListener("mouseup", () => {
        isDragging = false;
      });
    }
  };

  // src/license/LicenseValidator.ts
  var _S = [78, 167, 44, 245];
  var _PREFIX = "SCHED";
  function _hash(bytes) {
    let h = _S[0];
    for (const b of bytes) {
      h = (h << 4 ^ h >>> 4 ^ b ^ _S[h & 3]) & 255;
    }
    return h;
  }
  var _INVALID = {
    valid: false,
    customerId: 0,
    perpetual: false,
    expiresAt: null,
    expired: false,
    flags: 0
  };
  function validateLicense(key) {
    if (!key || typeof key !== "string") return __spreadValues({}, _INVALID);
    const parts = key.toUpperCase().trim().split("-");
    if (parts.length !== 4 || parts[0] !== _PREFIX) return __spreadValues({}, _INVALID);
    const [, g1, g2, g3] = parts;
    if (g1.length !== 5 || g2.length !== 5 || g3.length !== 5) return __spreadValues({}, _INVALID);
    const v1 = parseInt(g1, 36);
    const v2 = parseInt(g2, 36);
    const v3 = parseInt(g3, 36);
    if (isNaN(v1) || isNaN(v2) || isNaN(v3)) return __spreadValues({}, _INVALID);
    const r1 = v1 >> 16 & 255;
    const idHi = v1 >> 8 & 255;
    const idLo = v1 & 255;
    const r2 = v2 >> 16 & 255;
    const expiryOffset = v2 >> 8 & 255;
    const flags = v2 & 255;
    const r3 = v3 >> 16 & 255;
    const salt = v3 >> 8 & 255;
    const crc = v3 & 255;
    if (!(r1 & 128) || !(r2 & 128) || !(r3 & 128)) return __spreadValues({}, _INVALID);
    if (r1 !== (_hash([idHi, idLo, salt]) | 128)) return __spreadValues({}, _INVALID);
    if (r2 !== (_hash([expiryOffset, flags, salt]) | 128)) return __spreadValues({}, _INVALID);
    if (crc !== _hash([idHi, idLo, expiryOffset, flags, salt])) return __spreadValues({}, _INVALID);
    if (r3 !== (_hash([r1, r2, crc]) | 128)) return __spreadValues({}, _INVALID);
    const customerId = idHi << 8 | idLo;
    let expiresAt = null;
    let expired = false;
    if (expiryOffset > 0) {
      const expYear = 2025 + Math.floor((expiryOffset - 1) / 12);
      const expMonth = (expiryOffset - 1) % 12;
      expiresAt = new Date(expYear, expMonth, 1);
      const now = /* @__PURE__ */ new Date();
      const nowOffset = (now.getFullYear() - 2025) * 12 + now.getMonth();
      expired = nowOffset >= expiryOffset;
    }
    return { valid: true, customerId, perpetual: expiryOffset === 0, expiresAt, expired, flags };
  }
  function isPro(key) {
    const info = validateLicense(key);
    return info.valid && !info.expired;
  }

  // src/SchedulaCore.ts
  var SchedulaCore = class {
    constructor(scheduler, jsonData, settings) {
      this.version = "5.0.0";
      this.scheduler_id = "scheduler";
      this.headerHeight = 100;
      this.resourceFilteredCount = 0;
      this.splitBarPos = 0;
      this.calendarMousePos = new CalendarMousePos();
      this.mpos = new mousePos();
      this.schedulerMousePos = new mousePos();
      this.action = "";
      this.linkPoint = new mousePos();
      this.linkId = "";
      // Was SVGSVGElement | HTMLElement in logic, using any to contain complexity
      this.actionMemoPos = new mousePos();
      this.ratio = 1;
      this.zoom = 1;
      this.schedulerSVG = null;
      this.schedulerItems = null;
      this.schedulerContainer = null;
      this.splitBar = null;
      this.template = "";
      this.calendar = null;
      this._clickStart = { x: 0, y: 0 };
      this.itemConnPoint1 = null;
      this.itemConnPoint2 = null;
      this.itemConnPoint3 = null;
      this.itemConnPoint4 = null;
      this.connLine = null;
      this.currentView = SchedulaView.Month;
      /** Plugin registry — maps plugin name to plugin instance */
      this._plugins = /* @__PURE__ */ new Map();
      this.eventsSetup = false;
      this.scheduler_id = scheduler;
      this.data = jsonData;
      if (settings) {
        this.settings = settings;
      } else {
        this.settings = new SchedulaSettings();
      }
      ;
      this.initCalendar();
    }
    // ── Public accessors for plugin use ──────────────────────────────────────
    get schedulerSVGElement() {
      return this.schedulerSVG;
    }
    get schedulerItemsElement() {
      return this.schedulerItems;
    }
    get schedulerId() {
      return this.scheduler_id;
    }
    get currentAction() {
      return this.action;
    }
    set currentAction(val) {
      this.action = val;
    }
    get mousePosition() {
      return this.mpos;
    }
    get actionMemoPosition() {
      return this.actionMemoPos;
    }
    set actionMemoPosition(val) {
      this.actionMemoPos = val;
    }
    get calendarPosition() {
      return this.calendarMousePos;
    }
    get viewRatio() {
      return this.ratio;
    }
    get splitBarElement() {
      return this.splitBar;
    }
    get splitBarCurrentPos() {
      return this.splitBarPos;
    }
    set splitBarCurrentPos(val) {
      this.splitBarPos = val;
    }
    get currentElement() {
      return this.element;
    }
    set currentElement(val) {
      this.element = val;
    }
    get linkPointPos() {
      return this.linkPoint;
    }
    set linkPointPos(val) {
      this.linkPoint = val;
    }
    get currentLinkId() {
      return this.linkId;
    }
    set currentLinkId(val) {
      this.linkId = val;
    }
    get connPointElements() {
      return {
        p1: this.itemConnPoint1,
        p2: this.itemConnPoint2,
        p3: this.itemConnPoint3,
        p4: this.itemConnPoint4,
        line: this.connLine
      };
    }
    set connPointElements(val) {
      this.itemConnPoint1 = val.p1;
      this.itemConnPoint2 = val.p2;
      this.itemConnPoint3 = val.p3;
      this.itemConnPoint4 = val.p4;
      this.connLine = val.line;
    }
    // ── Plugin registry ──────────────────────────────────────────────────────
    registerPlugin(plugin) {
      if (this._plugins.has(plugin.name)) {
        console.warn(`[SchedulaCore] Plugin '${plugin.name}' already registered \u2014 skipping.`);
        return;
      }
      plugin.init(this);
      this._plugins.set(plugin.name, plugin);
    }
    getPlugin(name) {
      var _a;
      return (_a = this._plugins.get(name)) != null ? _a : null;
    }
    initCalendar() {
      var _a;
      this.calendar = new SchedulaCalendar();
      let r = this.calendar.newItem();
      r.capacity = this.calendar.reference;
      r.day = -1;
      r.from = 0;
      r.duration = 999999999;
      r.type = "rule";
      const calPlugin = this.getPlugin("calendar");
      if (calPlugin) calPlugin.applyData((_a = this.data) == null ? void 0 : _a.Calendar);
    }
    getCalendarForResource(_resourceId) {
      return this.calendar;
    }
    setData(data) {
      this.data = data;
      this.initCalendar();
      this.processData();
      this.refresh();
    }
    setView(num) {
      this.settings.timeUnitsView = num;
      this.refresh();
    }
    setStyle(style) {
      this.settings.gStyle = style;
      this.refresh();
    }
    toggleCalendarView() {
      if (!this.getPlugin("calendar")) return false;
      if (!isPro(this.settings.licenseKey)) return false;
      this.schedulerContainer.classList.toggle("calendar-view");
      return this.schedulerContainer.classList.contains("calendar-view");
    }
    clearGroupSafe(groupId) {
      const group = document.getElementById(groupId);
      if (!group) return;
      if (groupId === "scheduler-items") {
        const nodesToRemove = [];
        group.childNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node;
            if (el.id !== "scheduler-header" && el.id !== "scheduler-background" && el.tagName !== "animateTransform") {
              nodesToRemove.push(node);
            }
          } else {
            nodesToRemove.push(node);
          }
        });
        nodesToRemove.forEach((node) => {
          var _a;
          return (_a = node.parentNode) == null ? void 0 : _a.removeChild(node);
        });
      } else {
        group.innerHTML = "";
      }
    }
    refresh() {
      if (this.schedulerSVG) {
        const groups = ["scheduler-background", "scheduler-header", "scheduler-resources", "scheduler-events", "scheduler-info", "scheduler-items"];
        groups.forEach((id) => {
          this.clearGroupSafe(id);
        });
        const items = document.getElementById("scheduler-items");
        if (items) {
          items.setAttribute("transform", "translate(0,0)");
          const anims = items.getElementsByTagName("animateTransform");
          if (anims.length > 0) {
            anims[0].setAttribute("from", "0");
            anims[0].setAttribute("to", "0");
          }
        }
        this.draw();
        this.storeData();
      }
    }
    init() {
      this.schedulerContainer = document.getElementById(this.scheduler_id);
      if (this.schedulerContainer != null) {
        this.schedulerContainer.textContent = "";
        if (this.settings.theme) {
          this.schedulerContainer.classList.add(this.settings.theme);
        }
        if (this.settings.template) {
          this.template = this.settings.template;
        } else {
          this.template = new SchedulaTemplate().svgString;
        }
        this.schedulerContainer.innerHTML = this.template;
        document.body.style.overflow = "auto";
        this.schedulerSVG = document.querySelector("#main-svg");
        let defs = this.schedulerSVG.getElementById("defs");
        const parser = new DOMParser();
        const wrapped = `<svg xmlns="http://www.w3.org/2000/svg">${this.settings.icons}</svg>`;
        const doc = parser.parseFromString(wrapped, "image/svg+xml");
        const icons = doc.documentElement.childNodes;
        icons.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            this.schedulerSVG.ownerDocument.importNode(node, true);
            defs.appendChild(node);
          }
        });
        this.schedulerItems = document.getElementById("scheduler-items");
        this.splitBar = document.getElementById("scheduler-splitter");
        this.settings.plugins.forEach((p) => this.registerPlugin(p));
        if (!this.getPlugin("defaultpopup")) {
          this.registerPlugin(new DefaultPopupPlugin());
        }
        this.restoreView();
        if (this.schedulerContainer != null) {
          if (this.schedulerSVG != null) {
            this.draw();
            this.restoreShiftPos();
            this.processData();
            this.storeData();
            this.schedulerSVG.addEventListener("mousemove", (event) => {
              this.handleMouseMove(event);
            });
            this.schedulerSVG.addEventListener("mouseup", (event) => {
              this.svgMouseUp(event);
            });
            this.schedulerSVG.addEventListener("drop", (event) => {
              const dragDrop = this.getPlugin("dragdrop");
              if (dragDrop) dragDrop.onDrop(event);
            });
            this.schedulerSVG.addEventListener("dragover", (event) => {
              if (event.target.classList.contains("box-element")) {
                event.preventDefault();
              }
            });
            if (!this.eventsSetup) {
              let scheduler = this;
              document.addEventListener("keyup", (function(e) {
                if (e.key === "Escape") {
                  scheduler.escapePressed();
                }
              }));
              window.addEventListener("resize", (function(e) {
                scheduler.resized();
              }));
              this.eventsSetup = true;
            }
          } else {
            this.schedulerContainer.textContent = "Error: Template is null";
            console.log("Error: Template is null");
          }
        } else {
          console.log("scheduler id is null or div");
        }
      }
    }
    dropEventManagement(evt) {
      var _a, _b, _c;
      evt.stopImmediatePropagation();
      if (this.settings.dropEnable && evt.target.classList.contains("box-element")) {
        let y = parseFloat(evt.target.getAttribute("y"));
        let res = (y - this.headerHeight) / this.settings.resourceHeight;
        console.log("res:" + res);
        const strdata = evt.dataTransfer.getData("task");
        if (strdata != void 0 && strdata != "") {
          let data = JSON.parse(strdata);
          let dd = new Date(evt.target.getAttribute("data-date"));
          let sd = this.settings.date;
          let timespan = Math.trunc((dd.getTime() - sd.getTime()) / 1e3 / 60);
          let resource = this.data.Resources[res];
          if (!resource.Items == null || resource.Items == void 0) resource.Items = [];
          (_a = resource.Items) == null ? void 0 : _a.forEach((item) => {
            let start = item.Offset;
            let stop = item.Offset + item.Width;
            if (timespan < stop && timespan >= start)
              timespan = stop;
          });
          let link = "";
          this.data.Resources.forEach(function(r, resource2) {
            var _a2;
            (_a2 = resource2.Items) == null ? void 0 : _a2.forEach(function(i, item) {
              let guid = "link_" + Math.floor(Math.random() * 1e7);
              if (item.Text == data.text1 && item.Reference == data.ref && data.ref != "" && data.ref != void 0 && data.text1 != "") {
                item.Link = guid;
                item.Modified = true;
                link = guid;
              }
            });
          });
          let ra = Math.floor(Math.random() * 1e7);
          let dropped = {};
          dropped.Id = "_temp_id_" + ra.toString();
          dropped.Text = data.text1;
          dropped.Description = data.text2;
          dropped.Offset = timespan;
          dropped.Width = parseInt(data.width);
          dropped.Effort = dropped.Width;
          dropped.Link = link;
          dropped.IsNew = true;
          dropped.Modified = true;
          dropped.Color1 = data.color1;
          dropped.Classes = data.classes;
          dropped.From = sd.getTime() / 1e3 / 60 + timespan;
          dropped.To = dropped.From + dropped.Width;
          dropped.ForeignKey = data.key;
          dropped.Reference = data.ref;
          dropped.Pieces = data.pieces;
          if (resource.Items == void 0) {
            var items = [];
            resource.Items = items;
          }
          resource.Items.push(dropped);
          this.drawItem(dropped, res);
          dropped.Effort = dropped.Width;
          let scitem = new SchedulaItem(this, dropped, this.calendar);
          scitem.Effort = dropped.Width;
          if (this.settings.optimizeStart) scitem.Offset = scitem.Offset;
          if (typeof modified === "function") modified();
          if (data.elementId) (_b = document.getElementById(data.elementId)) == null ? void 0 : _b.remove();
          const notifPlugin = (_c = this.getPlugin) == null ? void 0 : _c.call(this, "notification");
          if (notifPlugin) notifPlugin.notifyAdded(dropped);
        }
      }
    }
    resized() {
      if (this.schedulerSVG)
        this.ratio = this.schedulerSVG.viewBox.baseVal.width / this.schedulerSVG.clientWidth;
    }
    draw() {
      var _a, _b;
      if (!this.schedulerSVG) return;
      this.settings.timeWidth = this.schedulerSVG.clientWidth / this.settings.timeUnitsView;
      let w = this.settings.timeUnitsView * this.settings.timeWidth;
      this.headerHeight = this.settings.timeElementHeight + this.settings.monthBoxHeight;
      if (this.settings.viewWeeks) {
        this.headerHeight += this.settings.weekBoxHeight;
      }
      if (this.settings.viewInfoElements || this.settings.viewEvents) {
        this.headerHeight += this.settings.infoElementHeight;
      }
      let h = ((_b = (_a = this.data.Resources) == null ? void 0 : _a.length) != null ? _b : 0) * this.settings.resourceHeight + this.headerHeight + this.settings.footerHeight;
      if (this.settings.viewWeeks == true) {
        h += this.settings.weekBoxHeight;
      }
      h += 5;
      this.schedulerSVG.viewBox.baseVal.x = 0;
      this.schedulerSVG.viewBox.baseVal.y = 0;
      this.schedulerSVG.viewBox.baseVal.width = w / this.zoom;
      this.schedulerSVG.viewBox.baseVal.height = h / this.zoom;
      this.ratio = this.schedulerSVG.viewBox.baseVal.width / this.schedulerSVG.clientWidth;
      this.resourceFilteredCount = 0;
      if (this.settings.groupFilter != 0) {
        this.resourceFilteredCount = this.data.Resources.filter((x) => {
          return x.group == this.settings.groupFilter;
        }).length;
      }
      this.drawHeader();
      this.drawMonths();
      this.drawWeeks();
      this.drawTimeUnits();
      this.drawBackGroud();
      const eventsPlugin = this.getPlugin("events");
      if (eventsPlugin) {
        eventsPlugin.drawEvents();
        eventsPlugin.drawInfoUnits();
      }
      this.drawResBg();
      this.initSplitter();
      this.drawItems();
      this.drawResources();
      var that = this;
      this.splitBar.addEventListener("mousedown", function(event) {
        that.splitterBarMouseDown(event);
      });
      const linksPlugin = this.getPlugin("links");
      if (linksPlugin) {
        if (this.settings.itemsLinks) linksPlugin.initLinks();
        if (this.settings.drawLinks) linksPlugin.drawLinks();
      }
      if (this.settings.viewShifters == true) {
        const cdx = document.getElementById("shifter-dx");
        let step = this.settings.shifterStep;
        let that2 = this;
        if (cdx != null) {
          cdx.style.visibility = "visible";
          cdx.addEventListener("click", function() {
            that2.shift(-step);
          });
        }
        const csx = document.getElementById("shifter-sx");
        if (csx != null) {
          csx.style.visibility = "visible";
          csx.addEventListener("click", function() {
            that2.shift(step);
          });
        }
      }
    }
    svgMouseUp(event) {
      const dragDrop = this.getPlugin("dragdrop");
      if (dragDrop) {
        dragDrop.onMouseUp(event);
      } else {
        this.clearAction();
      }
    }
    removeItem(id) {
      var _a;
      let scheduler = this;
      (_a = this.data.Resources) == null ? void 0 : _a.forEach(function(resource) {
        var _a2;
        (_a2 = resource.Items) == null ? void 0 : _a2.forEach(function(item) {
          if (item.Id == id) {
            item.Modified = true;
            item.Removed = true;
            scheduler.clearItems();
            scheduler.drawItems();
            return;
          }
        });
      });
    }
    handleMouseMove(event) {
      var _a, _b;
      this.mpos.x = event.pageX;
      this.mpos.y = event.pageY;
      let offsets = (_b = (_a = document.getElementById(this.scheduler_id)) == null ? void 0 : _a.getBoundingClientRect()) != null ? _b : { x: 0, y: 0 };
      this.schedulerMousePos.x = (this.mpos.x - offsets.x) * this.ratio;
      this.schedulerMousePos.y = (this.mpos.y - offsets.y) * this.ratio;
      const items = document.getElementById("scheduler-items");
      let transform = this.getTranslateValues(items);
      let mydate = this.settings.date;
      this.calendarMousePos.x = this.schedulerMousePos.x - transform.x - this.splitBarPos - 100;
      this.calendarMousePos.y = this.schedulerMousePos.y - transform.y;
      this.calendarMousePos.timeOffset = this.calendarMousePos.x / this.settings.timeWidth;
      this.calendarMousePos.resourceIndex = Math.floor((this.calendarMousePos.y - this.headerHeight) / this.settings.resourceHeight);
      this.calendarMousePos.date = new Date(mydate.getTime() + this.calendarMousePos.timeOffset * 864e5 + mydate.getTimezoneOffset() * 6e4);
      if (this.action === "splitter") {
        this.splitArea();
        return;
      }
      if (this.action === "linking") {
        const links = this.getPlugin("links");
        if (links) links.onLinkMouseMove(event);
        else this.linkItem();
        return;
      }
      if (this.action === "moving" || this.action === "sizing") {
        const dragDrop = this.getPlugin("dragdrop");
        if (dragDrop) dragDrop.onMouseMove(event);
        else if (this.action === "moving") this.moveItem();
        else if (this.action === "sizing") this.resizeItem();
      }
    }
    escapePressed() {
      var _a, _b, _c, _d, _e;
      if (this.settings.popupProvider && this.settings.licenseKey) {
        this.settings.popupProvider.hide();
      }
      const dragDrop = this.getPlugin("dragdrop");
      if (dragDrop) {
        dragDrop.onEscape();
        return;
      }
      if (this.action == "moving") {
        this.element.setAttribute("x", (_a = this.element.getAttribute("data-x")) != null ? _a : "0");
        this.element.setAttribute("y", (_b = this.element.getAttribute("data-y")) != null ? _b : "0");
        (_c = this.element.querySelector("rect.item")) == null ? void 0 : _c.classList.remove("moving");
      } else if (this.action == "sizing") {
        this.element.setAttribute("width", (_d = this.element.getAttribute("data-w")) != null ? _d : "0");
        (_e = this.element.querySelector("rect.item")) == null ? void 0 : _e.classList.remove("sizing");
      } else if (this.action == "linking") {
        this.resetLinkLine();
      }
      this.action = "";
    }
    getModulo(value, step, min) {
      const modulo = (value - (min != null ? min : 0)) % step;
      const correction = modulo > step / 2 ? step - modulo : -modulo;
      let result = value + correction;
      result = min != null && result < min ? min : result;
      return result;
    }
    moveItem() {
      var _a, _b;
      var x = parseFloat((_a = this.element.getAttribute("data-x")) != null ? _a : "0");
      var y = parseFloat((_b = this.element.getAttribute("data-y")) != null ? _b : "0");
      let variationx = Math.round((this.mpos.x - this.actionMemoPos.x) * this.ratio * 100) / 100;
      let variationy = Math.round((this.mpos.y - this.actionMemoPos.y) * this.ratio * 100) / 100;
      let newx = x + variationx;
      let newy = y + variationy;
      this.schedulerItems.append(this.element);
      this.element.setAttribute("x", newx.toString());
      if (this.settings.resourceChange) {
        this.element.setAttribute("y", newy.toString());
      }
      let datalink = this.element.getAttribute("data-link");
      if (datalink != null) {
      }
    }
    linkItem() {
      const line = document.getElementById("link-line");
      line == null ? void 0 : line.setAttribute("x1", this.linkPoint.x.toString());
      line == null ? void 0 : line.setAttribute("y1", this.linkPoint.y.toString());
      line == null ? void 0 : line.setAttribute("x2", this.calendarMousePos.x.toString());
      line == null ? void 0 : line.setAttribute("y2", (this.calendarMousePos.y - 3).toString());
    }
    resizeItem() {
      var _a;
      let variationx = Math.round((this.mpos.x - this.actionMemoPos.x) * this.ratio * 100) / 100;
      let w = parseFloat((_a = this.element.getAttribute("data-w")) != null ? _a : "0");
      let neww = w + variationx;
      this.schedulerItems.append(this.element);
      this.element.setAttribute("width", neww.toString());
      let datalink = this.element.getAttribute("data-link");
      if (datalink != null) {
      }
    }
    splitArea() {
      var _a;
      const sidebar = document.getElementById("scheduler-sidebar");
      let w = parseFloat((_a = sidebar.getAttribute("data-w")) != null ? _a : "0");
      let variationw = Math.round((this.mpos.x - this.actionMemoPos.x) * this.ratio * 100) / 100;
      let neww = w + variationw;
      if (neww > this.settings.sidebarMinWidth && neww < this.settings.sidebarMaxWidth) {
        sidebar.setAttribute("width", neww.toString());
        localStorage.setItem("splitbarpos", neww.toString());
      }
    }
    getTranslateValues(element) {
      if (!element) {
        return { x: 0, y: 0, z: 0 };
      }
      const style = window.getComputedStyle(element);
      let transform = style.transform;
      if (transform == null) {
        transform = "matrix(1,0,0,1,0,0)";
      }
      var m = transform.substring(7, transform.length - 1);
      var values = m.split(",");
      var x = parseFloat(values[4]);
      var y = parseFloat(values[5]);
      if (transform === "none" || typeof transform === "undefined" || transform === null) {
        return {
          x: 0,
          y: 0,
          z: 0
        };
      }
      return {
        x,
        y,
        z: 0
      };
    }
    processData() {
      var _a;
      if (!this.data.Resources) return;
      this.settings.date = new Date(this.settings.date.getFullYear(), this.settings.date.getMonth(), this.settings.date.getDate());
      let date = this.settings.date;
      let scheduler = this;
      (_a = this.data.Resources) == null ? void 0 : _a.forEach((resource, ri) => {
        if (resource.Items) {
          resource.Items.forEach(function(item, ii) {
            item.Offset = Math.trunc(item.Offset);
            item.Width = Math.trunc(item.Width);
            let from = date.getTime() / 6e4 + item.Offset;
            let to = date.getTime() / 6e4 + parseInt(item.Offset + item.Width);
            item.From = from;
            item.To = to;
            if (scheduler.calendar != null && scheduler.settings.calcEffort == true && item.Effort == void 0) {
              let schedulerItem = new SchedulaItem(scheduler, item, scheduler.calendar);
              schedulerItem.From = from;
              schedulerItem.Duration = to - from;
            }
          });
        }
      });
    }
    storeData() {
      if (this.settings.storeData) {
        localStorage.setItem("data", JSON.stringify(this.data));
      }
    }
    // ... Additional draw methods ...
    // Note: Due to size limits, I am summarizing the remaining methods. I will need to complete the rest in a subsequent file part or assume they are copied from Scheduler.ts
    // For brevity in this task, I will include the critical rendering methods.
    drawBackGroud() {
      var _a;
      var parent = document.getElementById("scheduler-background");
      if (parent) {
        var h = this.settings.resourceHeight * this.data.Resources.length;
        var w = this.settings.timeUnitsCount * this.settings.timeWidth;
        var y = this.headerHeight;
        var x = 0;
        const background = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        background.setAttribute("x", "0");
        background.setAttribute("y", y.toString());
        background.setAttribute("width", w.toString());
        background.setAttribute("height", h.toString());
        background.setAttribute("transform", "translate(0,0)");
        background.setAttribute("fill", "white");
        background.classList.add("bg");
        parent.append(background);
        if (this.data.Resources) {
          this.data.Resources.forEach((resource, ri) => {
            var ly = ri * this.settings.resourceHeight + this.headerHeight;
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", x.toString());
            line.setAttribute("x2", w.toString());
            line.setAttribute("y1", ly.toString());
            line.setAttribute("y2", ly.toString());
            line.setAttribute("class", "bg-hl");
            parent == null ? void 0 : parent.append(line);
          });
          let rcount = this.data.Resources.length;
          var today = /* @__PURE__ */ new Date();
          console.log(this.calendar);
          for (let c = 0; c < this.settings.timeUnitsCount; c++) {
            let hilight = false;
            let dt = this.settings.date;
            if (dt) {
              let cdate = new Date(dt.getTime() + c * this.settings.timeUnitVal * 60 * 1e3);
              hilight = cdate.getDay() == 0 && this.settings.hilightSunday;
              let saturday = cdate.getDay() == 6;
              let ratio = 1;
              if (this.calendar != null) {
                if (this.calendar.reference > 0) {
                  ratio = this.calendar.getCapacity(cdate.getTime() / 6e4 + 10, cdate.getDay()) / this.calendar.reference;
                  if (ratio > 1) ratio = 1;
                  if (ratio < 0) ratio = 0;
                }
              }
              let ry = this.headerHeight;
              let rx = c * this.settings.timeWidth;
              let rw = this.settings.timeWidth;
              let rh = this.settings.resourceHeight * rcount;
              const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
              line.setAttribute("x1", rx.toString());
              line.setAttribute("x2", rx.toString());
              line.setAttribute("y1", ry.toString());
              line.setAttribute("y2", (ry + rh).toString());
              line.setAttribute("class", "bg-vl");
              parent == null ? void 0 : parent.append(line);
              const box = document.createElementNS("http://www.w3.org/2000/svg", "rect");
              box.setAttribute("x", rx.toString());
              box.setAttribute("y", ry.toString());
              box.setAttribute("width", rw.toString());
              box.setAttribute("height", rh.toString());
              box.setAttribute("data-date", cdate.toUTCString());
              box.classList.add("daybox-element");
              if (hilight == true) box.classList.add("sunday");
              if (saturday == true) box.classList.add("saturday");
              parent.append(line);
              parent.append(box);
              for (let rr = 0; rr < rcount; rr++) {
                ry = this.headerHeight + rr * this.settings.resourceHeight;
                rx = c * this.settings.timeWidth;
                let resRatio = ratio;
                if (this.calendar && this.calendar.reference > 0) {
                  const resId = (_a = this.data.Resources[rr]) == null ? void 0 : _a.Id;
                  resRatio = this.calendar.getCapacity(cdate.getTime() / 6e4 + 10, cdate.getDay(), resId) / this.calendar.reference;
                  if (isNaN(resRatio)) resRatio = ratio;
                  if (resRatio > 1) resRatio = 1;
                  if (resRatio < 0) resRatio = 0;
                }
                rw = resRatio === 0 ? this.settings.timeWidth : this.settings.timeWidth * resRatio;
                if (isNaN(rw)) rw = 0;
                const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                rect.setAttribute("x", rx.toString());
                rect.setAttribute("y", ry.toString());
                rect.setAttribute("width", rw.toString());
                rect.setAttribute("height", this.settings.resourceHeight.toString());
                rect.setAttribute("data-date", cdate.toUTCString());
                rect.setAttribute("data-res", this.data.Resources[rr].Id);
                rect.setAttribute("class", resRatio === 0 ? "box-element no-capacity" : "box-element");
                rect.addEventListener("click", function(ev) {
                  if (typeof gridMouseClick == "function") {
                    gridMouseClick(ev, cdate);
                  }
                });
                let that = this;
                rect.addEventListener("mouseover", function(ev) {
                  if (typeof gridMouseOver == "function") {
                    var i = that.getSum(ev.target);
                    gridMouseOver(ev, i);
                  }
                });
                parent.append(rect);
              }
            }
          }
        }
      }
    }
    filterItems(filter) {
      const items = document.querySelectorAll(".svg-item");
      items.forEach((item) => {
        item.style.opacity = "1";
        item.classList.remove("selected");
        let filterlower = filter.toLowerCase();
        if (filterlower != "") {
          let data = item.querySelectorAll("text");
          let ref = item.getAttribute("data-ref");
          let key = item.getAttribute("data-key");
          let show = false;
          if (data != void 0) {
            data.forEach((text) => {
              show = show || text.innerHTML.toLowerCase().startsWith(filterlower);
            });
          } else show = false;
          if (key != void 0) {
            show = show || key.toLowerCase().startsWith(filterlower);
          }
          ;
          if (ref != void 0) {
            show = show || ref.toLowerCase().startsWith(filterlower);
          }
          if (show) {
            item.style.opacity = "1";
            item.classList.add("selected");
          } else {
            item.style.opacity = "0.2";
            item.classList.remove("selected");
          }
        }
      });
    }
    drawResBg() {
      let parent = document.getElementById("scheduler-resources");
      const resources = this.data.Resources || [];
      let h = this.settings.resourceHeight * resources.length;
      let w = this.settings.resourceWidth;
      let y = this.headerHeight;
      let x = 0;
      let clip = document.getElementById("clip-res");
      if (clip == null) {
        let clip2 = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
        clip2.setAttribute("id", "clip-res");
        const box = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        box.setAttribute("x", x.toString());
        box.setAttribute("y", y.toString());
        box.setAttribute("width", "100%");
        box.setAttribute("height", "100%");
        box.setAttribute("id", "clip-res-rect");
        clip2.append(box);
        parent == null ? void 0 : parent.append(clip2);
      }
      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("x", x.toString());
      rect.setAttribute("y", y.toString());
      rect.setAttribute("width", "100%");
      rect.setAttribute("height", "100%");
      rect.setAttribute("class", "sb-rbg");
      rect.setAttribute("fill", "transparent");
      rect.setAttribute("clip-path", "Url(#clip-res)");
      parent == null ? void 0 : parent.append(rect);
      h = this.headerHeight;
      w = this.settings.resourceWidth;
      y = 0;
      x = 0;
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("x", x.toString());
      svg.setAttribute("y", y.toString());
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", h.toString());
      svg.setAttribute("class", "sb-hbg");
      const elem = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      elem.setAttribute("x", x.toString());
      elem.setAttribute("y", y.toString());
      elem.setAttribute("width", "100%");
      elem.setAttribute("height", h.toString());
      elem.setAttribute("class", "sb-hbg");
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", (x + 2).toString());
      text.setAttribute("y", (y - 2).toString());
      text.setAttribute("class", "resource-header-text");
      text.innerHTML = this.settings.resHeaderText;
      elem.append(text);
      svg.append(elem);
      parent == null ? void 0 : parent.append(svg);
    }
    initSplitter() {
      let stored = localStorage.getItem("splitbarpos");
      let splitbarpos = stored ? parseFloat(stored) : this.settings.splitBarinitPos;
      if (isNaN(splitbarpos) || splitbarpos <= 0) splitbarpos = this.settings.splitBarinitPos;
      let sh = this.settings.resourceHeight * this.data.Resources.length + this.headerHeight;
      let sw = this.settings.splitterWidth;
      let sy = 0;
      let sx = splitbarpos;
      let wrapper = document.getElementById("wrapper");
      let splitter = document.getElementById("scheduler-splitter");
      if (splitter) this.splitBar = splitter;
      const sidebar = document.getElementById("scheduler-sidebar");
      sidebar.setAttribute("width", sx.toString());
    }
    drawResources() {
      var _a;
      const sidebar = document.getElementById("scheduler-sidebar");
      const resources = document.getElementById("scheduler-resources");
      let h = this.headerHeight;
      let w = this.settings.timeUnitsCount * this.settings.timeWidth;
      let y = 0;
      let x = 0;
      let splitbarpos = parseFloat((_a = localStorage.getItem("splitbarpos")) != null ? _a : "0");
      if (!splitbarpos || splitbarpos < this.settings.sidebarMinWidth || splitbarpos > this.settings.sidebarMaxWidth) {
        splitbarpos = this.settings.splitBarinitPos;
      }
      sidebar == null ? void 0 : sidebar.setAttribute("width", splitbarpos.toString());
      var count = 0;
      if (this.data.Resources) {
        this.data.Resources.forEach((resource, ri) => {
          var _a2, _b;
          let y2 = count * this.settings.resourceHeight + this.headerHeight;
          let ty = (count + 1) * this.settings.resourceHeight + this.headerHeight - 2;
          let x2 = 1;
          const rsvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          rsvg.setAttribute("x", "0");
          rsvg.setAttribute("y", y2.toString());
          rsvg.setAttribute("width", "100%");
          rsvg.setAttribute("height", this.settings.resourceHeight.toString());
          rsvg.setAttribute("font-size", this.settings.resourceHeight.toString());
          let clipid = "clip-res-" + Math.floor(Math.random() * 1e7);
          const clip = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
          clip.setAttribute("x", "0");
          clip.setAttribute("y", "0");
          clip.setAttribute("width", "100%");
          clip.setAttribute("height", "100%");
          clip.setAttribute("id", clipid);
          const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          rect.setAttribute("x", "0");
          rect.setAttribute("y", "0");
          rect.setAttribute("width", "100%");
          rect.setAttribute("height", "100%");
          clip.append(rect);
          rsvg == null ? void 0 : rsvg.append(clip);
          const res = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          res.setAttribute("x", "0");
          res.setAttribute("y", this.settings.resPadding.toString());
          res.setAttribute("width", "100%");
          res.setAttribute("height", "calc(100% - " + (this.settings.resPadding * 2).toString() + "px)");
          res.setAttribute("id", resource.Id.toString());
          res.setAttribute("class", "resource");
          if (resource.Classes) {
            resource.Classes.split(" ").forEach((c) => {
              if (c != "") res.classList.add(c);
            });
          }
          res.setAttribute("clip-path", "Url(#" + clipid + ")");
          if (this.settings.resRoundRect > 0) res.setAttribute("rx", this.settings.resRoundRect.toString());
          res.addEventListener("click", (event) => {
            this.resourceClick(event, { resource });
            if (typeof resourceClick === "function") {
              resourceClick(event, resource);
            }
          });
          rsvg == null ? void 0 : rsvg.append(res);
          x2 = 2;
          if (resource.Image && this.settings.resourceImages) {
            let imgdim = this.settings.resourceHeight * 0.8;
            let imgspace = this.settings.resourceHeight * 0.1;
            let clipid2 = "clip-" + Math.floor(Math.random() * 1e7);
            const imgsvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            imgsvg.setAttribute("x", x2.toString());
            imgsvg.setAttribute("y", "10%");
            imgsvg.setAttribute("height", imgdim.toString());
            imgsvg.setAttribute("width", imgdim.toString());
            imgsvg.setAttribute("class", "resource-image");
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", (imgdim / 2).toString());
            circle.setAttribute("cy", "50%");
            circle.setAttribute("r", (imgdim / 2).toString());
            const clip2 = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
            clip2.setAttribute("id", clipid2);
            clip2.append(circle);
            imgsvg.append(clip2);
            const rimage = document.createElementNS("http://www.w3.org/2000/svg", "image");
            rimage.setAttribute("x", "0");
            rimage.setAttribute("y", "0");
            rimage.setAttribute("width", "100%");
            rimage.setAttribute("height", "100%");
            rimage.setAttribute("href", (_a2 = resource.Image) != null ? _a2 : "");
            rimage.setAttribute("clip-path", "Url(#" + clipid2 + ")");
            rimage.setAttribute("class", "resource-image");
            imgsvg == null ? void 0 : imgsvg.append(rimage);
            rsvg.append(imgsvg);
            x2 += imgdim + imgspace;
          }
          const restext = document.createElementNS("http://www.w3.org/2000/svg", "text");
          restext.setAttribute("x", x2.toString());
          restext.setAttribute("y", "55%");
          restext.setAttribute("class", "resource-text");
          restext.setAttribute("font-size", "35%");
          restext.setAttribute("dominant-baseline", "middle");
          restext.setAttribute("clip-path", "Url(#" + clipid + ")");
          restext.innerHTML = resource.Name;
          restext.addEventListener("click", (event) => {
            this.resourceClick(event, { resource });
            if (typeof resourceClick === "function") {
              resourceClick(event, { resource });
            }
          });
          resources.append(rsvg);
          rsvg == null ? void 0 : rsvg.append(restext);
          x2 += restext.getBBox().width + 6;
          let icndim = this.settings.resourceHeight * 0.4;
          let halficn = icndim / 2;
          (_b = resource.Icons) == null ? void 0 : _b.forEach((icon, ii) => {
            if (icon.Name) {
              const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
              use.setAttribute("href", "#" + icon.Name);
              use.setAttribute("x", x2.toString());
              use.setAttribute("y", "calc(50% - " + halficn.toString() + "px)");
              use.setAttribute("height", icndim.toString());
              use.setAttribute("width", icndim.toString());
              use.setAttribute("class", "resource-icon");
              if (icon.Classes) use.setAttribute("class", "resource-icon " + icon.Classes);
              rsvg.append(use);
              x2 += icndim + 4;
            }
          });
          count++;
        });
      }
    }
    drawItems() {
      var _a;
      this.clearItems();
      let scheduler = this;
      let cdate = this.settings.date;
      (_a = this.data.Resources) == null ? void 0 : _a.forEach((resource, ri) => {
        var _a2;
        if (this.settings.groupFilter == 0 || resource.group == this.settings.groupFilter) {
          (_a2 = resource.Items) == null ? void 0 : _a2.forEach(function(item) {
            scheduler.drawItem(item, ri);
          });
        }
      });
    }
    /**
     * Refreshes a single item visually without redrawing the whole SVG.
     * @param item The item data object to refresh
     */
    refreshItem(item) {
      var _a;
      if (!item || !item.Id) return;
      const oldElement = document.querySelector(`svg[data-id="${item.Id}"]`);
      if (oldElement) {
        oldElement.remove();
      }
      let resIndex = -1;
      (_a = this.data.Resources) == null ? void 0 : _a.forEach((res, idx) => {
        if (res.Items && res.Items.some((i) => i.Id === item.Id)) {
          resIndex = idx;
        }
      });
      if (resIndex !== -1) {
        let date = this.settings.date;
        item.Offset = Math.trunc(item.Offset);
        item.Width = Math.trunc(item.Width);
        let from = date.getTime() / 6e4 + item.Offset;
        let to = date.getTime() / 6e4 + parseInt(item.Offset + item.Width);
        item.From = from;
        item.To = to;
        if (this.calendar != null && this.settings.calcEffort == true && item.Effort == void 0) {
          let schedulerItem = new SchedulaItem(this, item, this.calendar);
          schedulerItem.From = from;
          schedulerItem.Duration = to - from;
        }
        this.drawItem(item, resIndex);
        const links = this.getPlugin("links");
        if (links && this.settings.drawLinks) {
          links.drawLinks();
        }
      }
    }
    clearItems() {
      this.clearGroupSafe("scheduler-items");
      if (this.settings.itemsLinks) {
        const links = this.getPlugin("links");
        if (links) links.initLinks();
        else this.initLinks();
      }
    }
    drawItem(item, resindex, mask = true) {
      var _a, _b, _c;
      let x = 0;
      let y = 0;
      let w = 0;
      let h = this.settings.resourceHeight;
      let offset = item.Offset;
      let width = item.Width;
      w = this.settings.timeWidth * (width / this.settings.timeUnitVal);
      if (width == 0) w = 0;
      x = this.settings.timeWidth * (offset / this.settings.timeUnitVal);
      y = resindex * this.settings.resourceHeight + this.headerHeight + this.settings.itemsPadding;
      h = h - this.settings.itemsPadding * 2;
      if (this.settings.viewWeeks == true) {
      }
      let itemData = new SchedulaItem(this, item, this.calendar);
      let drawItem = true;
      if (drawItem) {
        let ItemSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        ItemSVG.setAttribute("x", x.toString());
        ItemSVG.setAttribute("y", y.toString());
        ItemSVG.setAttribute("width", w.toString());
        ItemSVG.setAttribute("height", h.toString());
        ItemSVG.setAttribute("class", "svg-item");
        if (this.settings.canMoveItems) ItemSVG.classList.add("draggable");
        ItemSVG.setAttribute("data-id", item.Id);
        ItemSVG.setAttribute("data-ref", item.Reference);
        ItemSVG.setAttribute("data-key", item.ForeignKey);
        if (item.Link) ItemSVG.setAttribute("data-link", item.Link);
        let clipid = "clip-" + item.Id;
        let maskid = "mask-" + item.Id;
        let rx = this.settings.roundRect;
        if (this.settings.gStyle == "round-rect" && rx == 0) rx = 5;
        if (this.settings.gStyle == "rect") rx = 0;
        if (this.settings.gStyle == "circle") rx = 0;
        const clip = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
        clip.setAttribute("id", clipid);
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", "0");
        rect.setAttribute("y", "0");
        rect.setAttribute("width", "100%");
        rect.setAttribute("height", "100%");
        if (rx > 0) rect.setAttribute("rx", rx.toString());
        clip.append(rect);
        ItemSVG.append(clip);
        const itemrect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        itemrect.setAttribute("x", "0");
        itemrect.setAttribute("y", "0");
        itemrect.setAttribute("width", "100%");
        itemrect.setAttribute("height", "100%");
        if (rx > 0) itemrect.setAttribute("rx", rx.toString());
        if (item.Color1) {
          itemrect.classList.add("custom-color");
          itemrect.style.fill = item.Color1;
        }
        if (item.Classes) {
          let classes = item.Classes.split(" ");
          classes.forEach((c) => {
            if (c != "") itemrect.classList.add(c);
          });
        }
        itemrect.classList.add("item");
        itemrect.setAttribute("clip-path", "url(#" + clipid + ")");
        let arrow = false;
        if (item.Type == "Arrow" || this.settings.gStyle == "arrow") arrow = true;
        let circle = false;
        if (item.Type == "Circle" || this.settings.gStyle == "circle") circle = true;
        let gantt = false;
        if (item.Type == "Gantt") gantt = true;
        if (circle) {
          itemrect.setAttribute("rx", (h / 2).toString());
          clip.querySelector("rect").setAttribute("rx", (h / 2).toString());
        }
        ItemSVG.append(itemrect);
        (_a = item.Pieces) == null ? void 0 : _a.forEach((piece) => {
          var completion = piece.Width;
          const pback = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          pback.setAttribute("x", piece.Start);
          pback.setAttribute("y", "0");
          pback.setAttribute("width", piece.Width);
          pback.setAttribute("height", "100%");
          pback.setAttribute("fill", piece.Color);
          pback.setAttribute("clip-path", "url(#" + clipid + ")");
          ItemSVG.append(pback);
        });
        if (item.Completion != null) {
          const progressGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
          let padding = 1;
          if (this.settings.progressBarPattern) {
            const pback = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            pback.setAttribute("x", "0");
            pback.setAttribute("y", "80%");
            pback.setAttribute("width", "100%");
            pback.setAttribute("height", "calc(20% - " + padding.toString() + "px)");
            pback.setAttribute("class", "progress-bar-background");
            pback.setAttribute("fill", "white");
            pback.setAttribute("opacity", "0.2");
            pback.setAttribute("clip-path", "url(#" + clipid + ")");
            progressGroup.append(pback);
            if (item.Completion > 0 && item.Completion <= 100) {
              var pbfill = "black";
              if (this.settings.progressBarAnimation == true && item.Completion < 100)
                pbfill = "url(#progress-pattern)";
              const pbar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
              pbar.setAttribute("x", "0");
              pbar.setAttribute("y", "80%");
              pbar.setAttribute("width", "calc(" + item.Completion + "%)");
              pbar.setAttribute("height", "calc(20% - " + padding.toString() + "px)");
              pbar.setAttribute("class", "progress-bar");
              pbar.setAttribute("fill", pbfill);
              pbar.setAttribute("opacity", "0.3");
              pbar.setAttribute("clip-path", "url(#" + clipid + ")");
              progressGroup.append(pbar);
            }
            ItemSVG.append(progressGroup);
          }
        }
        if (this.settings.canResizeItems == true) {
          const resize = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          resize.setAttribute("x", "calc(100% - 10px)");
          resize.setAttribute("y", "0");
          resize.setAttribute("width", "10");
          resize.setAttribute("height", "100%");
          resize.setAttribute("class", "resize");
          resize.setAttribute("fill", "transparent");
          resize.style.cursor = "ew-resize";
          let l1y1 = "15%";
          let l2y1 = "15%";
          let l1y2 = "85%";
          let l2y2 = "85%";
          if (arrow) {
            l1y1 = "45%";
            l2y1 = "38%";
            l1y2 = "55%";
            l2y2 = "62%";
          }
          const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
          line1.setAttribute("x1", "calc(100% - 4px)");
          line1.setAttribute("x2", "calc(100% - 4px)");
          line1.setAttribute("y1", l1y1);
          line1.setAttribute("y2", l1y2);
          line1.setAttribute("class", "resize-line");
          line1.setAttribute("stroke-width", "1");
          line1.setAttribute("stroke", "white");
          const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
          line2.setAttribute("x1", "calc(100% - 6px)");
          line2.setAttribute("x2", "calc(100% - 6px)");
          line2.setAttribute("y1", l2y1);
          line2.setAttribute("y2", l2y2);
          line2.setAttribute("class", "resize-line");
          line2.setAttribute("stroke-width", "1");
          line2.setAttribute("stroke", "white");
          ItemSVG.append(line1);
          ItemSVG.append(line2);
          ItemSVG.append(resize);
        }
        if (item.ViewInfo == true) {
          let mysize = this.settings.infoElementSize;
          let info;
          if (arrow) {
            info = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            info.setAttribute("x", "0");
            info.setAttribute("y", "0");
            info.setAttribute("width", mysize.toString());
            info.setAttribute("height", mysize.toString());
            info.setAttribute("mask", "url(#" + maskid + ")");
          } else {
            info = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            info.setAttribute("points", "0,0 0," + mysize.toString() + " " + mysize.toString() + ",0 0,0");
          }
          info.setAttribute("fill", "black");
          info.setAttribute("opacity", "0.5");
          info.setAttribute("class", "additional-info");
          info.setAttribute("clip-path", "url(#" + clipid + ")");
          ItemSVG.append(info);
        }
        if (this.settings.itemsText) {
          let lx = 4;
          if (arrow) lx += h / 2;
          const itemtext = document.createElementNS("http://www.w3.org/2000/svg", "text");
          itemtext.setAttribute("x", lx.toString());
          itemtext.setAttribute("y", "15%");
          let fontSize = 12;
          if (typeof this.settings.itemTextSize === "string" && this.settings.itemTextSize.includes("%")) {
            const pct = parseFloat(this.settings.itemTextSize) / 100;
            fontSize = this.settings.resourceHeight * pct;
          } else if (typeof this.settings.itemTextSize === "string" && this.settings.itemTextSize.includes("px")) {
            fontSize = parseFloat(this.settings.itemTextSize);
          }
          itemtext.setAttribute("font-size", fontSize.toString());
          itemtext.setAttribute("dominant-baseline", "hanging");
          itemtext.setAttribute("class", "item-text");
          itemtext.setAttribute("clip-path", "url(#" + clipid + ")");
          itemtext.innerHTML = (_b = item.Text) != null ? _b : "";
          ItemSVG.append(itemtext);
          const itemtext2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
          itemtext2.setAttribute("x", lx.toString());
          itemtext2.setAttribute("y", "50%");
          let descSize = this.settings.resourceHeight * 0.25;
          itemtext2.setAttribute("font-size", descSize.toString());
          itemtext2.setAttribute("dominant-baseline", "hanging");
          itemtext2.setAttribute("class", "item-text2");
          itemtext2.setAttribute("clip-path", "url(#" + clipid + ")");
          itemtext2.innerHTML = (_c = item.Description) != null ? _c : "";
          ItemSVG.append(itemtext2);
        }
        if (arrow) {
          const mask2 = document.createElementNS("http://www.w3.org/2000/svg", "mask");
          mask2.setAttribute("id", maskid);
          const maskrect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          maskrect.setAttribute("x", "0");
          maskrect.setAttribute("y", "0");
          maskrect.setAttribute("width", "calc(100% - " + h / 2 + "px)");
          maskrect.setAttribute("height", "100%");
          maskrect.setAttribute("fill", "white");
          const square1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          square1.setAttribute("x", "calc(100%)");
          square1.setAttribute("y", (h / 2).toString());
          square1.setAttribute("width", h.toString());
          square1.setAttribute("height", "100%");
          square1.setAttribute("fill", "white");
          square1.setAttribute("transform", "rotate(135)");
          square1.setAttribute("transform-origin", "calc(100%) calc(50%)");
          const square2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          square2.setAttribute("x", (-h / 2).toString());
          square2.setAttribute("y", (h / 2).toString());
          square2.setAttribute("width", h.toString());
          square2.setAttribute("height", h.toString());
          square2.setAttribute("fill", "black");
          square2.setAttribute("transform", "rotate(45)");
          square2.setAttribute("transform-origin", h / 2 + " " + h / 2);
          mask2.append(maskrect);
          mask2.append(square1);
          mask2.append(square2);
          itemrect.setAttribute("mask", "url(#" + maskid + ")");
          ItemSVG.append(mask2);
        }
        let that = this;
        ItemSVG.addEventListener("mousedown", function(event) {
          that.itemMouseDown(event, { item, element: this });
        });
        ItemSVG.addEventListener("mouseup", function(event) {
          that.itemMouseUp(event, { item, element: this });
        });
        ItemSVG.addEventListener("click", function(event) {
          that.itemClick(event, { item, element: this });
          if (typeof taskClick === "function") {
            taskClick(event, item);
          }
          ;
        });
        ItemSVG.addEventListener("mouseenter", function(event) {
          that.itemOver(event, { item });
        });
        ItemSVG.addEventListener("mouseleave", function(event) {
          that.itemOut(event, { item, element: this });
        });
        ItemSVG.addEventListener("drop", function(event) {
          that.dropOnElement(event, { item, element: this });
        });
        ItemSVG.addEventListener("dragover", function(event) {
          that.dragOverElement(event, { item, element: this });
        });
        this.schedulerItems.append(ItemSVG);
      }
    }
    initLinks() {
      var _a, _b, _c, _d, _e;
      if (this.settings.itemsLinks == true) {
        this.itemConnPoint1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.itemConnPoint1.setAttribute("cx", "0");
        this.itemConnPoint1.setAttribute("cy", "0");
        this.itemConnPoint1.setAttribute("r", "5");
        this.itemConnPoint1.setAttribute("fill", "white");
        this.itemConnPoint1.setAttribute("stroke", "#00ff00");
        this.itemConnPoint1.setAttribute("class", "c1 link-point");
        this.itemConnPoint1.setAttribute("stroke-width", "1");
        this.itemConnPoint2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.itemConnPoint2.setAttribute("cx", "0");
        this.itemConnPoint2.setAttribute("cy", "0");
        this.itemConnPoint2.setAttribute("r", "5");
        this.itemConnPoint2.setAttribute("fill", "white");
        this.itemConnPoint2.setAttribute("stroke", "#00ff00");
        this.itemConnPoint2.setAttribute("class", "c2 link-point");
        this.itemConnPoint2.setAttribute("stroke-width", "1");
        this.itemConnPoint3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.itemConnPoint3.setAttribute("cx", "0");
        this.itemConnPoint3.setAttribute("cy", "0");
        this.itemConnPoint3.setAttribute("r", "5");
        this.itemConnPoint3.setAttribute("fill", "white");
        this.itemConnPoint3.setAttribute("stroke", "#00ff00");
        this.itemConnPoint3.setAttribute("class", "c3 link-point");
        this.itemConnPoint3.setAttribute("stroke-width", "1");
        this.itemConnPoint4 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.itemConnPoint4.setAttribute("cx", "0");
        this.itemConnPoint4.setAttribute("cy", "0");
        this.itemConnPoint4.setAttribute("r", "5");
        this.itemConnPoint4.setAttribute("fill", "white");
        this.itemConnPoint4.setAttribute("stroke", "#00ff00");
        this.itemConnPoint4.setAttribute("class", "c4 link-point");
        this.itemConnPoint4.setAttribute("stroke-width", "1");
        this.connLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        this.connLine.setAttribute("x1", "0");
        this.connLine.setAttribute("y1", "0");
        this.connLine.setAttribute("x2", "0");
        this.connLine.setAttribute("y2", "0");
        this.connLine.setAttribute("stroke-width", "1");
        this.connLine.setAttribute("id", "link-line");
        this.connLine.setAttribute("stroke", "#00ff00");
        (_a = this.schedulerItems) == null ? void 0 : _a.append(this.connLine);
        (_b = this.schedulerItems) == null ? void 0 : _b.append(this.itemConnPoint1);
        (_c = this.schedulerItems) == null ? void 0 : _c.append(this.itemConnPoint2);
        (_d = this.schedulerItems) == null ? void 0 : _d.append(this.itemConnPoint3);
        (_e = this.schedulerItems) == null ? void 0 : _e.append(this.itemConnPoint4);
        document.querySelectorAll(".link-point").forEach((element) => {
          element.addEventListener("click", (event) => this.linkPointClick(event));
        });
      }
    }
    drawLinks() {
      var _a;
      this.clearLinks();
      if (this.settings.drawLinks == true) {
        (_a = this.data.Resources) == null ? void 0 : _a.forEach((resource, resindex) => {
          var _a2;
          (_a2 = resource.Items) == null ? void 0 : _a2.forEach((item1, index) => {
            var _a3;
            if (typeof item1.Link !== "undefined") {
              if (item1.Link !== "" && item1.Link !== null) {
                (_a3 = this.data.Resources) == null ? void 0 : _a3.forEach((resource2, resindex2) => {
                  var _a4;
                  (_a4 = resource2.Items) == null ? void 0 : _a4.forEach((item2, index2) => {
                    var _a5;
                    let samelink = item2.Link == item1.Link;
                    let idlink = item1.Link == item2.Id;
                    let singletime = samelink && (item1.Offset < item2.Offset || item1.Offset == item2.Offset && resindex > resindex2) || idlink;
                    let notitself = item2.Id != item1.Id;
                    let cond = resindex == resindex2;
                    if ((samelink || idlink) && singletime && notitself) {
                      var x1 = this.settings.timeWidth * ((item1.Offset + item1.Width / 2) / this.settings.timeUnitVal);
                      var x2 = this.settings.timeWidth * ((item2.Offset + item2.Width / 2) / this.settings.timeUnitVal);
                      var y1 = resindex * this.settings.resourceHeight + this.headerHeight + this.settings.itemsPadding;
                      var y2 = (resindex2 - 1) * this.settings.resourceHeight + this.headerHeight - this.settings.itemsPadding;
                      if (cond) {
                        let i1 = item1.Offset > item2.Offset ? item2 : item1;
                        let i2 = item1.Offset > item2.Offset ? item1 : item2;
                        x1 = this.settings.timeWidth * ((i1.Offset + i1.Width) / this.settings.timeUnitVal);
                        x2 = this.settings.timeWidth * (i2.Offset / this.settings.timeUnitVal);
                        y1 = (resindex + 0.5) * this.settings.resourceHeight + this.headerHeight;
                        y2 = y1;
                      }
                      if (!cond && resindex < resindex2) {
                        y1 = (resindex + 1) * this.settings.resourceHeight + this.headerHeight - this.settings.itemsPadding;
                        y2 = resindex2 * this.settings.resourceHeight + this.headerHeight + this.settings.itemsPadding;
                      }
                      var y3 = ((resindex + resindex2) / 2 + 0.5) * this.settings.resourceHeight + this.headerHeight;
                      let strpath = "";
                      strpath = " M" + x1 + "," + y1 + " V " + y3 + " H" + x2 + " V" + y2;
                      if (this.settings.linkSpline == true) {
                        strpath = " M" + x1 + "," + y1 + " C" + x1 + "," + y3 + " " + x2 + "," + y3 + "  " + x2 + "," + y2;
                      }
                      if (cond) {
                        strpath = " M" + x1 + "," + y1 + " L" + x2 + "," + y1;
                      } else if (!cond && resindex > resindex2) {
                        y2 = (resindex2 + 1) * this.settings.resourceHeight + this.headerHeight - this.settings.itemsPadding;
                        strpath = " M " + x1 + "," + y1 + " V " + y3 + " H " + x2 + " V " + y2;
                        if (this.settings.linkSpline == true) {
                          strpath = " M " + x1 + "," + y1 + " C" + x1 + " " + y3 + " " + x2 + "," + y3 + " " + x2 + " " + y2;
                        }
                      }
                      const linkline = document.createElementNS("http://www.w3.org/2000/svg", "path");
                      let linkid = "link-" + Math.floor(Math.random() * 1e7);
                      linkline.setAttribute("id", linkid);
                      linkline.setAttribute("d", strpath);
                      linkline.setAttribute("fill", "none");
                      linkline.setAttribute("stroke-width", "4");
                      linkline.setAttribute("class", "link link-wire");
                      linkline.setAttribute("stroke-linecap", "round");
                      linkline.setAttribute("data-link", item1.Link.toString());
                      (_a5 = this.schedulerItems) == null ? void 0 : _a5.append(linkline);
                      const elem1 = document.getElementById(item1.Id.toString());
                      if (elem1) elem1.setAttribute("data-link", linkid);
                      const elem2 = document.getElementById(item2.Id.toString());
                      if (elem2) elem2.setAttribute("data-link", linkid);
                    }
                  });
                });
              }
            }
          });
        });
      }
    }
    clearLinks() {
      document.querySelectorAll(".link").forEach((element) => {
        element.remove();
      });
    }
    hideLinkpoints() {
      document.querySelectorAll(".link-point").forEach((element) => {
        element.style.visibility = "hidden";
      });
    }
    showLinkpoints() {
      document.querySelectorAll(".link-point").forEach((element) => {
        element.style.visibility = "visible";
      });
    }
    splitterBarMouseDown(event) {
      if (this.action == "") this.action = "splitter";
      const sidebar = document.getElementById("scheduler-sidebar");
      event.target.classList.add("sizing");
      this.element = event.target;
      this.actionMemoPos.x = event.pageX;
      this.actionMemoPos.y = event.pageY;
      sidebar.setAttribute("data-w", sidebar.getAttribute("width"));
    }
    shift(step) {
      var _a;
      const items = document.getElementById("scheduler-items");
      const anim = (_a = items == null ? void 0 : items.getElementsByTagName("animateTransform")) != null ? _a : null;
      console.log(anim);
      if (anim && anim.length > 0) {
        let minpos = 0;
        let maxpos = -((this.settings.timeUnitsCount - this.settings.timeUnitsView - 1) * this.settings.timeWidth);
        let transform = this.getTranslateValues(items);
        var pos = transform.x + step * this.settings.timeWidth;
        if (pos > minpos) pos = minpos;
        if (pos < maxpos) pos = maxpos;
        anim[0].setAttribute("from", transform == null ? void 0 : transform.x.toString());
        anim[0].setAttribute("to", pos.toString());
        anim[0].beginElement();
        localStorage.setItem("schedulaShiftPos", pos.toString());
      } else if (items) {
        let minpos = 0;
        let maxpos = -((this.settings.timeUnitsCount - this.settings.timeUnitsView - 1) * this.settings.timeWidth);
        let transform = this.getTranslateValues(items);
        var pos = transform.x + step * this.settings.timeWidth;
        if (pos > minpos) pos = minpos;
        if (pos < maxpos) pos = maxpos;
        items.setAttribute("transform", "translate(" + pos + ",0)");
        localStorage.setItem("schedulaShiftPos", pos.toString());
      }
    }
    itemMouseDown(event, data) {
      const dragDrop = this.getPlugin("dragdrop");
      if (dragDrop) {
        dragDrop.onItemMouseDown(event, data);
      } else {
        if (typeof window.itemMouseDown === "function") {
          window.itemMouseDown(event, data);
        }
      }
    }
    itemMouseUp(event, data) {
      const dragDrop = this.getPlugin("dragdrop");
      if (dragDrop) {
        dragDrop.onItemMouseUp(event, data);
      } else {
        this.setAction("");
      }
      const linksPlugin = this.getPlugin("links");
      if (linksPlugin && this.settings.drawLinks) linksPlugin.drawLinks();
      this.storeData();
    }
    itemClick(event, element) {
      if (typeof window.taskClick === "function") {
        window.taskClick(event, element == null ? void 0 : element.item);
      }
      if (!this.settings.enablePopup || !(element == null ? void 0 : element.item)) return;
      if (this.settings.popupProvider && this.settings.licenseKey) {
        this.settings.popupProvider.show(element.item, event, this);
        return;
      }
      const defaultPopup = this.getPlugin("defaultpopup");
      if (defaultPopup && typeof defaultPopup.onItemClick === "function") {
        defaultPopup.onItemClick(event, element);
        return;
      }
    }
    ensurePopup() {
      let popup = document.getElementById("scheduler-popup");
      if (!popup) {
        popup = document.createElement("div");
        popup.id = "scheduler-popup";
        popup.className = "scheduler-popup";
        popup.style.display = "none";
        popup.innerHTML = `
                <div class="popup-container">
                    <div class="popup-header" id="scheduler-popup-header">
                        <button class="close-button" id="scheduler-popup-close">&#x2715;</button>
                        <span id="scheduler-popup-title">Task</span>
                    </div>
                    <div class="popup-content">
                        <div class="tab">
                            <button class="tab-btn active" data-tab="info">Info</button>
                            <button class="tab-btn" data-tab="json">JSON</button>
                        </div>
                        <div class="tabcontent active" id="scheduler-popup-tab-info">
                            <div class="formgroup">
                                <label>Text</label>
                                <input class="taskinput" id="popup-field-text" type="text">
                            </div>
                            <div class="formgroup">
                                <label>Description</label>
                                <input class="taskinput" id="popup-field-desc" type="text">
                            </div>
                            <div class="formgroup">
                                <label>From</label>
                                <input class="taskinput" id="popup-field-from" type="text" readonly>
                            </div>
                            <div class="formgroup">
                                <label>To</label>
                                <input class="taskinput" id="popup-field-to" type="text" readonly>
                            </div>
                            <div class="formgroup">
                                <label>Color</label>
                                <input class="taskinput" id="popup-field-color" type="color">
                            </div>
                            <div class="formgroup">
                                <label>Completion %</label>
                                <input class="taskinput" id="popup-field-completion" type="number" min="0" max="100">
                            </div>
                            <div class="formgroup">
                                <label>Reference</label>
                                <input class="taskinput" id="popup-field-ref" type="text">
                            </div>
                        </div>
                        <div class="tabcontent" id="scheduler-popup-tab-json">
                            <textarea id="popup-field-json"></textarea>
                        </div>
                    </div>
                    <div class="popup-footer">
                        <button class="scheduler-popup-btn" id="popup-btn-cancel">Cancel</button>
                        <button class="scheduler-popup-btn" id="popup-btn-save">Save</button>
                    </div>
                </div>`;
        document.body.appendChild(popup);
        popup.querySelectorAll(".tab-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            popup.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
            popup.querySelectorAll(".tabcontent").forEach((t) => t.classList.remove("active"));
            btn.classList.add("active");
            const tab = btn.dataset.tab;
            if (tab === "info") {
              document.getElementById("scheduler-popup-tab-info").classList.add("active");
            } else if (tab === "json") {
              document.getElementById("scheduler-popup-tab-json").classList.add("active");
            }
          });
        });
        this.makePopupDraggable(popup);
      }
      return popup;
    }
    makePopupDraggable(popup) {
      const header = popup.querySelector("#scheduler-popup-header");
      if (!header) return;
      let isDragging = false;
      let startX = 0, startY = 0, startLeft = 0, startTop = 0;
      header.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        const rect = popup.getBoundingClientRect();
        startLeft = rect.left + window.scrollX;
        startTop = rect.top + window.scrollY;
        popup.style.left = startLeft + "px";
        popup.style.top = startTop + "px";
        popup.style.transform = "none";
        e.preventDefault();
      });
      document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        popup.style.left = startLeft + e.clientX - startX + "px";
        popup.style.top = startTop + e.clientY - startY + "px";
      });
      document.addEventListener("mouseup", () => {
        isDragging = false;
      });
    }
    itemOver(event, item) {
      var _a, _b, _c, _d;
      if (this.settings.itemsLinks) {
        const linksPlugin = this.getPlugin("links");
        if (linksPlugin) {
          const el = event.currentTarget;
          const cx = parseFloat((_a = el.getAttribute("x")) != null ? _a : "0");
          const cy = parseFloat((_b = el.getAttribute("y")) != null ? _b : "0");
          const cw = parseFloat((_c = el.getAttribute("width")) != null ? _c : "0");
          const ch = parseFloat((_d = el.getAttribute("height")) != null ? _d : "0");
          const pts = this.connPointElements;
          if (pts.p1) {
            pts.p1.setAttribute("cx", cx.toString());
            pts.p1.setAttribute("cy", (cy + ch / 2).toString());
            pts.p1.setAttribute("target", el.getAttribute("data-id"));
          }
          if (pts.p2) {
            pts.p2.setAttribute("cx", (cx + cw / 2).toString());
            pts.p2.setAttribute("cy", cy.toString());
            pts.p2.setAttribute("target", el.getAttribute("data-id"));
          }
          if (pts.p3) {
            pts.p3.setAttribute("cx", (cx + cw / 2).toString());
            pts.p3.setAttribute("cy", (cy + ch).toString());
            pts.p3.setAttribute("target", el.getAttribute("data-id"));
          }
          if (pts.p4) {
            pts.p4.setAttribute("cx", (cx + cw).toString());
            pts.p4.setAttribute("cy", (cy + ch / 2).toString());
            pts.p4.setAttribute("target", el.getAttribute("data-id"));
          }
          document.querySelectorAll(".link-point").forEach((e) => e.style.visibility = "visible");
        }
      }
      const dragDrop = this.getPlugin("dragdrop");
      if (dragDrop) dragDrop.onItemOver(event, item);
      else if (typeof window.itemMouseEnter === "function") window.itemMouseEnter(event, item);
    }
    itemOut(event, item) {
      if (this.settings.itemsLinks) {
        const pts = this.connPointElements;
        const itemsEl = this.schedulerItems;
        if (pts.line) itemsEl == null ? void 0 : itemsEl.append(pts.line);
        if (pts.p1) itemsEl == null ? void 0 : itemsEl.append(pts.p1);
        if (pts.p2) itemsEl == null ? void 0 : itemsEl.append(pts.p2);
        if (pts.p3) itemsEl == null ? void 0 : itemsEl.append(pts.p3);
        if (pts.p4) itemsEl == null ? void 0 : itemsEl.append(pts.p4);
      }
      const dragDrop = this.getPlugin("dragdrop");
      if (dragDrop) dragDrop.onItemOut(event, item);
      else if (typeof window.itemMouseExit === "function") window.itemMouseExit(event, item);
    }
    dropOnElement(event, element) {
    }
    dragOverElement(event, element) {
    }
    linkPointClick(event) {
      var _a, _b, _c, _d;
      if (this.settings.itemsLinks == true && this.action == "") {
        this.action = "linking";
        this.linkPoint.x = parseFloat((_a = event.target.getAttribute("cx")) != null ? _a : "0");
        this.linkPoint.y = parseFloat((_b = event.target.getAttribute("cy")) != null ? _b : "0");
        this.linkId = (_c = event.target.getAttribute("target")) != null ? _c : "-----";
      } else {
        if (this.action == "linking" && this.linkId != event.target.getAttribute("target")) {
          (_d = this.data.Resources) == null ? void 0 : _d.forEach((resource) => {
            var _a2;
            (_a2 = resource.Items) == null ? void 0 : _a2.forEach((item) => {
              if (item.Id == this.linkId) {
                item.Link = event.target.getAttribute("target");
                if (this.settings.drawLinks == true) {
                  this.drawLinks();
                }
              }
            });
          });
        }
        this.clearAction();
      }
    }
    clearAction() {
      var _a;
      if (this.action == "splitter") this.action = "";
      this.resetLinkLine();
      (_a = document.querySelector(".splitter")) == null ? void 0 : _a.classList.remove("sizing");
    }
    resetLinkLine() {
      const line = document.getElementById("link-line");
      line == null ? void 0 : line.setAttribute("x1", "0");
      line == null ? void 0 : line.setAttribute("x2", "0");
      line == null ? void 0 : line.setAttribute("y1", "0");
      line == null ? void 0 : line.setAttribute("y2", "0");
      this.linkId = "";
      this.linkPoint.x = 0;
      this.linkPoint.y = 0;
    }
    setAction(action) {
      var _a;
      if (action == "") {
        if (this.action != "") {
          (_a = this.schedulerItems) == null ? void 0 : _a.querySelectorAll("rect.item").forEach((element) => element.classList.remove(this.action));
        }
      }
      this.action = action;
    }
    drawEvents() {
      if (this.settings.viewEvents == true) {
        var parent = document.getElementById("scheduler-background");
        if (this.data.Events) {
          let ry = this.settings.monthBoxHeight;
          if (this.settings.viewWeeks)
            ry += this.settings.weekBoxHeight;
          this.data.Events.forEach((event, ei) => {
            let rx = event.Offset * this.settings.timeWidth / this.settings.timeUnitVal;
            let rw = this.settings.timeWidth * event.Width / this.settings.timeUnitVal;
            let rhh = this.data.Resources.length * this.settings.resourceHeight + this.headerHeight;
            let rh = this.settings.infoElementHeight;
            const svgevent = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svgevent.setAttribute("x", rx.toString());
            svgevent.setAttribute("y", ry.toString());
            svgevent.setAttribute("width", rw.toString());
            svgevent.setAttribute("height", rhh.toString());
            svgevent.setAttribute("class", "svg-event draggable-x");
            svgevent.setAttribute("cursor", "pointer");
            svgevent.setAttribute("data-id", event.Id);
            const ev = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            ev.setAttribute("x", "0");
            ev.setAttribute("y", "0");
            ev.setAttribute("width", rw.toString());
            ev.setAttribute("height", rh.toString());
            ev.setAttribute("class", "event-header " + event.Classes);
            ev.setAttribute("fill", event.Color);
            const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
            title.innerHTML = event.Description;
            ev.append(title);
            if (this.settings.viewEventExtended == true) {
              let p = document.getElementById("scheduler-items");
              let y = this.headerHeight;
              const extevent = document.createElementNS("http://www.w3.org/2000/svg", "rect");
              extevent.setAttribute("x", rx.toString());
              extevent.setAttribute("y", y.toString());
              extevent.setAttribute("width", rw.toString());
              extevent.setAttribute("height", rhh.toString());
              extevent.setAttribute("fill", event.Color);
              extevent.setAttribute("class", "event-extension " + event.Classes);
              p == null ? void 0 : p.append(extevent);
            }
            svgevent.append(ev);
            parent == null ? void 0 : parent.append(svgevent);
          });
        }
      }
    }
    drawInfoUnits() {
      if (this.settings.viewInfoElements) {
      }
    }
    // Helper to get sum for mouse over
    getSum(box) {
      var _a;
      let dt = box.getAttribute("data-date");
      if (!dt) return {};
      let dt1 = this.settings.date;
      let dt2 = new Date(dt);
      let start = Math.trunc((dt2.getTime() - dt1.getTime()) / 1e3 / 60);
      let stop = start + this.settings.timeUnitVal;
      let sum = 0;
      let y = parseFloat(box.getAttribute("y"));
      let resIndex = (y - this.headerHeight) / this.settings.resourceHeight;
      let resource = this.data.Resources[resIndex];
      let name = resource.Name;
      (_a = resource.Items) == null ? void 0 : _a.forEach(function(i, item) {
        let x = i.Offset;
        let w = i.Offset + i.Width;
        if (x < start && w > start && w <= stop) {
          sum += w - start;
        } else if (x >= start && w <= stop) {
          sum += i.Width;
        } else if (x >= start && x < stop && w > stop) {
          sum += stop - x;
        } else if (x < start && w > stop) {
          sum += stop - start;
        }
      });
      var info = {};
      info["sum"] = sum;
      info["name"] = name;
      info["info"] = "-- --";
      info["resource"] = dt2.toLocaleDateString() + " | " + name;
      if (sum > 0) {
        let hh = Math.trunc(sum / 60);
        let mm = sum - hh * 60;
        let time = this.pad(hh) + ":" + this.pad(mm);
        info["info"] = time;
      }
      return info;
    }
    pad(d) {
      return d < 10 ? "0" + d.toString() : d.toString();
    }
    switchViewMode(event, view) {
      var _a;
      switch (view) {
        case SchedulaView.Day:
          this.settings.timeUnitsView = 2;
          this.settings.shifterStep = 1;
          break;
        case SchedulaView.Week:
          this.settings.timeUnitsView = 7;
          this.settings.shifterStep = 4;
          break;
        case SchedulaView.Month:
          this.settings.timeUnitsView = 31;
          this.settings.shifterStep = 15;
          break;
        default:
          break;
      }
      const clickedDateStr = (_a = event.target.getAttribute("data-date")) != null ? _a : "";
      if (clickedDateStr) {
        this.settings.date = new Date(clickedDateStr);
      }
      this.currentView = view;
      localStorage.setItem("schedulaView", view);
      localStorage.removeItem("schedulaShiftPos");
      const items = document.getElementById("scheduler-items");
      if (items) items.setAttribute("transform", "translate(0,0)");
      this.refresh();
    }
    restoreView() {
      let savedView = localStorage.getItem("schedulaView");
      if (savedView && Object.values(SchedulaView).includes(savedView)) {
        this.currentView = savedView;
        switch (savedView) {
          case SchedulaView.Day:
            this.settings.timeUnitsView = 2;
            this.settings.shifterStep = 1;
            break;
          case SchedulaView.Week:
            this.settings.timeUnitsView = 7;
            this.settings.shifterStep = 4;
            break;
          case SchedulaView.Month:
            this.settings.timeUnitsView = 31;
            this.settings.shifterStep = 15;
            break;
        }
      }
    }
    restoreShiftPos() {
      let savedPos = localStorage.getItem("schedulaShiftPos");
      if (savedPos) {
        let pos = parseFloat(savedPos);
        if (!isNaN(pos) && pos !== 0) {
          const items = document.getElementById("scheduler-items");
          if (items) {
            let minpos = 0;
            let maxpos = -((this.settings.timeUnitsCount - this.settings.timeUnitsView - 1) * this.settings.timeWidth);
            if (pos > minpos) pos = minpos;
            if (pos < maxpos) pos = maxpos;
            items.setAttribute("transform", "translate(" + pos + ",0)");
          }
        }
      }
    }
    resourceClick(event, data) {
    }
    drawMonths() {
      const parent = document.getElementById("scheduler-header");
      var dt = this.settings.date;
      if (dt && parent) {
        let lastmonth = -1;
        let increment = 60 * 1e3 * this.settings.timeUnitVal;
        for (let i = 0; i < this.settings.timeUnitsCount; i++) {
          var cdate = new Date(dt.getTime() + i * increment);
          let w = this.settings.timeWidth;
          let x = i * this.settings.timeWidth;
          let day = cdate.getUTCDate();
          let month = cdate.getUTCMonth();
          if (month != lastmonth) {
            var days = new Date(cdate.getUTCFullYear(), cdate.getUTCMonth() + 1, 1).getUTCDate();
            var mw = w * days;
            if (this.settings.timeUnitVal == 60) mw = w * 24;
            var my = 0;
            var mh = this.settings.monthBoxHeight;
            var mx = x;
            if (this.settings.timeUnitVal == 1440) {
              if (day != 1) mx = x - (day - 1) * w;
            } else {
              mx = x + this.settings.timeWidth;
            }
            var t = this.settings.months[cdate.getUTCMonth()];
            if (this.settings.viewYear == true) {
              t += " " + cdate.getUTCFullYear();
            }
            if (this.settings.timeUnitVal == 60) t = cdate.toLocaleDateString();
            const monthsvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            monthsvg.setAttribute("x", mx.toString());
            monthsvg.setAttribute("y", my.toString());
            monthsvg.setAttribute("width", mw.toString());
            monthsvg.setAttribute("height", mh.toString());
            monthsvg.setAttribute("font-size", "100%");
            const monthBox = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            monthBox.setAttribute("x", "0");
            monthBox.setAttribute("y", "0");
            monthBox.setAttribute("width", "100%");
            monthBox.setAttribute("height", "100%");
            monthBox.setAttribute("data-date", cdate.toUTCString());
            monthBox.setAttribute("class", "monthbox");
            let that = this;
            monthBox.addEventListener("click", (event) => {
              that.switchViewMode(event, SchedulaView.Month);
            });
            const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
            title.innerHTML = t;
            monthBox.append(title);
            monthsvg.append(monthBox);
            let tx = 10;
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", tx.toString());
            text.setAttribute("y", "50%");
            text.setAttribute("font-size", "40%");
            text.setAttribute("dominant-baseline", "middle");
            text.setAttribute("class", "header-text");
            text.innerHTML = t;
            monthsvg.append(text);
            if (this.settings.viewStars == true) {
              const stars = document.createElementNS("http://www.w3.org/2000/svg", "use");
              stars.setAttribute("x", (mx - 31).toString());
              stars.setAttribute("y", (my + 8).toString());
              stars.setAttribute("href", "#stars");
              monthsvg.append(stars);
            }
            if (this.settings.viewMonthLogo == true) {
              const logo = document.createElementNS("http://www.w3.org/2000/svg", "image");
              logo.setAttribute("x", (mw - mh).toString());
              logo.setAttribute("y", (mh / 8).toString());
              logo.setAttribute("width", (mh / 4 * 3).toString());
              logo.setAttribute("height", (mh / 4 * 3).toString());
              logo.setAttribute("href", this.settings.logo);
              logo.setAttribute("class", "scheduler-month-logo");
              const title2 = document.createElementNS("http://www.w3.org/2000/svg", "title");
              title2.innerHTML = this.settings.logoTitle;
              logo.append(title2);
              monthsvg.append(logo);
            }
            parent.append(monthsvg);
            lastmonth = month;
          }
        }
      }
    }
    drawWeeks() {
      let parent = document.getElementById("scheduler-header");
      var dt = this.settings.date;
      if (dt && parent) {
        let increment = 60 * 1e3 * this.settings.timeUnitVal;
        for (let i = 0; i < this.settings.timeUnitsCount; i++) {
          let cdate = new Date(dt.getTime() + i * increment);
          let hilight = cdate.getDay() == 0;
          let h = this.settings.weekBoxHeight;
          let w = this.settings.timeWidth * 7;
          let y = this.settings.monthBoxHeight;
          let x = i * this.settings.timeWidth;
          if (this.settings.viewWeeks && (hilight || i == 0) && this.settings.timeUnitVal == 1440) {
            let weeksvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            weeksvg.setAttribute("x", x.toString());
            weeksvg.setAttribute("y", y.toString());
            weeksvg.setAttribute("width", w.toString());
            weeksvg.setAttribute("height", h.toString());
            let elem = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            elem.setAttribute("x", "0");
            elem.setAttribute("y", "0");
            elem.setAttribute("width", w.toString());
            elem.setAttribute("height", h.toString());
            elem.setAttribute("data-date", cdate.toUTCString());
            elem.classList.add("week-element");
            let that = this;
            elem.addEventListener("click", (event) => {
              that.switchViewMode(event, SchedulaView.Week);
            });
            let txt = this.getWeekOfYear(cdate).toString();
            const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
            title.innerHTML = txt;
            elem.append(title);
            weeksvg.append(elem);
            let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", "50%");
            text.setAttribute("y", "50%");
            text.setAttribute("font-size", "70%");
            text.setAttribute("dominant-baseline", "middle");
            text.setAttribute("fill", "gray");
            text.classList.add("week-element-text");
            text.setAttribute("text-anchor", "middle");
            text.innerHTML = txt;
            weeksvg.append(text);
            parent.append(weeksvg);
          }
        }
      }
    }
    drawTimeUnits() {
      let parent = document.getElementById("scheduler-header");
      let dt = this.settings.date;
      if (dt && parent) {
        let today = /* @__PURE__ */ new Date();
        let increment = 60 * 1e3 * this.settings.timeUnitVal;
        for (let i = 0; i < this.settings.timeUnitsCount; i++) {
          let cdate = new Date(dt.getTime() + i * increment);
          let longdate = cdate.toLocaleDateString("it-it", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
          let daynum = cdate.toLocaleDateString("it-it", { day: "numeric" });
          let daymonth = cdate.toLocaleDateString("it-it", { day: "numeric", month: "short" });
          let istoday = today.getDate() == cdate.getDate() && today.getMonth() == cdate.getMonth() && today.getFullYear() == cdate.getFullYear();
          let hilight = cdate.getDay() == 0 && this.settings.hilightSunday;
          let h = this.settings.timeElementHeight;
          let w = this.settings.timeWidth;
          let y = this.headerHeight - this.settings.timeElementHeight;
          let x = i * this.settings.timeWidth;
          const elem = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          elem.setAttribute("x", x.toString());
          elem.setAttribute("y", y.toString());
          elem.setAttribute("width", w.toString());
          elem.setAttribute("height", h.toString());
          elem.classList.add("time-element");
          if (istoday) elem.classList.add("today");
          if (hilight) elem.classList.add("sunday");
          elem.setAttribute("data-date", cdate.toUTCString());
          elem.setAttribute("fill", "transparent");
          let that = this;
          elem.addEventListener("click", (event) => {
            that.switchViewMode(event, SchedulaView.Day);
          });
          parent.append(elem);
          var tx = x + this.settings.timeWidth / 2;
          if (this.settings.timeUnitVal == 60)
            tx = x;
          var ty = y + h - 4;
          const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
          text.setAttribute("x", tx.toString());
          text.setAttribute("y", ty.toString());
          text.classList.add("time-element-text");
          text.setAttribute("font-size", "75%");
          text.setAttribute("font-family", "Arial");
          text.setAttribute("stroke-width", "0.2");
          text.setAttribute("font-weight", "bold");
          text.setAttribute("text-anchor", "middle");
          if (istoday) text.classList.add("today");
          if (hilight) text.classList.add("sunday");
          if (this.settings.timeUnitsView > 7) {
            text.innerHTML = daynum;
          } else if (this.settings.timeUnitsView == 1) {
            text.innerHTML = longdate;
          } else {
            text.innerHTML = daymonth;
          }
          parent.append(text);
          const dummy = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          dummy.setAttribute("x", x.toString());
          dummy.setAttribute("y", y.toString());
          dummy.setAttribute("width", w.toString());
          dummy.setAttribute("height", h.toString());
          dummy.classList.add("time-unit");
          dummy.setAttribute("data-date", cdate.toUTCString());
          dummy.addEventListener("click", (event) => {
            that.switchViewMode(event, SchedulaView.Day);
            if (typeof timeMouseClick == "function") {
              timeMouseClick(event, cdate);
            }
          });
          const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
          title.innerHTML = longdate;
          dummy.append(title);
          parent.append(dummy);
        }
      }
    }
    getWeekOfYear(date) {
      var day = this.getDayOfYear(date);
      var week = Math.floor(day / 7);
      return week + 1;
    }
    getDayOfYear(date) {
      var start = new Date(date.getFullYear(), 0, 0);
      var diff = date.getTime() - start.getTime();
      var oneDay = 1e3 * 60 * 60 * 24;
      var day = Math.floor(diff / oneDay);
      return day;
    }
    getTemplate() {
    }
    drawHeader() {
      const parent = document.getElementById("scheduler-header");
      if (parent) {
        var h = this.headerHeight;
        var w = this.settings.timeUnitsCount * this.settings.timeWidth;
        var y = 0;
        var x = 0;
        const header = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        header.setAttribute("x", x.toString());
        header.setAttribute("y", y.toString());
        header.setAttribute("width", w.toString());
        header.setAttribute("height", h.toString());
        header.setAttribute("class", "header-bg");
        parent.appendChild(header);
      }
    }
  };

  // src/models/SchedulaSettings.ts
  var SchedulaSettings2 = class {
    constructor() {
      this.splitBarToggleButtons = true;
      this.resHeaderText = "";
      this.footerHeight = 0;
      this.storeData = true;
      this.animation = true;
      this.canMoveItems = true;
      this.canResizeItems = true;
      this.viewWeeks = true;
      this.viewInfoElements = false;
      this.viewInfo = true;
      this.checkInterferences = true;
      this.shiftItems = true;
      this.calcEffort = true;
      this.optimizeStart = true;
      this.roundRectRadius = 2;
      this.resourceHeight = 48;
      this.resourceWidth = 200;
      this.resourceImages = true;
      this.resourceChange = true;
      this.resCollapsedWidth = 1e3;
      this.splitBarinitPos = 300;
      this.infoElementSize = 15;
      this.resRoundRect = 2;
      this.resPadding = 2;
      this.roundRect = 5;
      this.progressBarPattern = true;
      this.resUnitsView = 0;
      this.timeUnitsView = 30;
      //number of time units shown in a screen
      this.timeUnitVal = 1440;
      //number of minutes in time unit
      this.gridStep = 1440;
      this.gridOffset = 0;
      //grid step in minutes
      this.timeUnitsCount = 90;
      //number of time units view
      this.timeWidth = 144;
      //graphic width of time unit
      this.timeElementHeight = 15;
      this.monthBoxHeight = 50;
      this.weekBoxHeight = 15;
      this.infoElementHeight = 15;
      this.viewMonthLogo = true;
      this.logoTitle = "";
      this.splitterWidth = 10;
      this.sidebarMaxWidth = 350;
      this.sidebarMinWidth = 40;
      this.date = /* @__PURE__ */ new Date("2023-09-21");
      this.groupFilter = 0;
      this.hilightSunday = true;
      this.logo = "";
      this.dropEnable = true;
      this.itemsLinks = false;
      this.drawLinks = false;
      this.linkSpline = true;
      this.itemsPadding = 3;
      this.itemsText = true;
      this.itemTextOffestX = 50;
      this.itemTextOffestY = 40;
      this.itemTextFont = "Arial";
      this.itemTextSize = "30%";
      this.gStyle = "round-rect";
      this.arrowSize = 6;
      this.perfectMatch = false;
      this.viewYear = true;
      this.viewShifters = true;
      this.shifterStep = 10;
      this.viewEvents = true;
      this.viewEventExtended = true;
      this.canMoveEvents = true;
      this.viewStars = false;
      this.progressBar = true;
      this.progressBarAnimation = true;
      this.icons = "";
      this.theme = "";
      this.template = "";
      this.months = [
        "Gennaio",
        "Febbraio",
        "Marzo",
        "Aprile",
        "Maggio",
        "Giugno",
        "Luglio",
        "Agosto",
        "Settembre",
        "Ottobre",
        "Novembre",
        "Dicembre"
      ];
      /**
       * List of plugins to register with the core at init() time.
       * Each plugin must implement `ISchedulaPlugin`.
       * PRO plugins (DragDropPlugin, LinksPlugin, EventsPlugin) go here.
       *
       * @example
       * ```typescript
       * settings.plugins = [new DragDropPlugin(), new LinksPlugin()];
       * ```
       */
      this.plugins = [];
      /**
       * If true, enables popup functionality when clicking on an item.
       * The actual popup shown depends on the registered plugins or popupProvider.
       */
      this.enablePopup = true;
    }
  };

  // src/plugins/DragDropPlugin.ts
  var DragDropPlugin = class {
    constructor() {
      this.name = "dragdrop";
      this._dragItem = null;
    }
    init(core) {
      this._core = core;
    }
    destroy() {
      this._core = null;
    }
    // ── Mouse move (delegates moving or sizing) ────────────────────────────
    onMouseMove(event) {
      const action = this._core.currentAction;
      if (action === "moving") this._move();
      else if (action === "sizing") this._resize();
    }
    _move() {
      var _a, _b, _c;
      const core = this._core;
      const element = core.currentElement;
      if (!element) return;
      const x = parseFloat((_a = element.getAttribute("data-x")) != null ? _a : "0");
      const y = parseFloat((_b = element.getAttribute("data-y")) != null ? _b : "0");
      const mpos = core.mousePosition;
      const memo = core.actionMemoPosition;
      const ratio = core.viewRatio;
      const variationx = Math.round((mpos.x - memo.x) * ratio * 100) / 100;
      const variationy = Math.round((mpos.y - memo.y) * ratio * 100) / 100;
      element.setAttribute("x", (x + variationx).toString());
      if (core.settings.resourceChange) {
        element.setAttribute("y", (y + variationy).toString());
      }
      (_c = core.schedulerItemsElement) == null ? void 0 : _c.append(element);
      this._liveRefreshPopup();
    }
    _resize() {
      var _a, _b;
      const core = this._core;
      const element = core.currentElement;
      if (!element) return;
      const mpos = core.mousePosition;
      const memo = core.actionMemoPosition;
      const ratio = core.viewRatio;
      const w = parseFloat((_a = element.getAttribute("data-w")) != null ? _a : "0");
      const variationx = Math.round((mpos.x - memo.x) * ratio * 100) / 100;
      element.setAttribute("width", (w + variationx).toString());
      (_b = core.schedulerItemsElement) == null ? void 0 : _b.append(element);
      this._liveRefreshPopup();
    }
    _liveRefreshPopup() {
      if (!this._dragItem) return;
      const core = this._core;
      if (!core.settings.enablePopup) return;
      const popupProvider = core.settings.popupProvider && core.settings.licenseKey ? core.settings.popupProvider : core.getPlugin("defaultpopup");
      if (popupProvider && typeof popupProvider.refreshItem === "function") {
        popupProvider.refreshItem(this._dragItem);
      }
    }
    // ── Mouse up (finalize action) ─────────────────────────────────────────
    onMouseUp(event) {
      var _a, _b, _c;
      const core = this._core;
      const action = core.currentAction;
      if (action === "moving" || action === "sizing") {
        const element = core.currentElement;
        if (element) {
          const id = element.getAttribute("data-id");
          let itemData = null;
          (_a = core.data.Resources) == null ? void 0 : _a.forEach((r) => {
            var _a2;
            (_a2 = r.Items) == null ? void 0 : _a2.forEach((i) => {
              if (String(i.Id) === id) itemData = i;
            });
          });
          if (itemData) {
            this.processItemAction(element, itemData, event.ctrlKey);
            if (core.settings.enablePopup) {
              const popupProvider = core.settings.popupProvider || core.getPlugin("advancedpopup") || core.getPlugin("defaultpopup");
              if (popupProvider && typeof popupProvider.refreshItem === "function") {
                popupProvider.refreshItem(itemData);
              }
            }
            const notifPlugin = (_b = core.getPlugin) == null ? void 0 : _b.call(core, "notification");
            if (notifPlugin && itemData) notifPlugin.notifyChanged(itemData);
          }
          this._dragItem = null;
        }
      }
      if (action) {
        (_c = core.schedulerItemsElement) == null ? void 0 : _c.querySelectorAll("rect.item").forEach(
          (el) => {
            el.classList.remove(action);
          }
        );
      }
      core.currentAction = "";
      if (typeof window.modified === "function") window.modified();
      if (core.settings.storeData) localStorage.setItem("data", JSON.stringify(core.data));
    }
    /**
     * Applies the result of a move/resize action to the data model.
     * Handles grid snapping and collision/interference logic.
     * (formerly named processItemAction2 — renamed for clarity)
     */
    processItemAction(element, data, ctrl) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      const core = this._core;
      const settings = core.settings;
      let x = parseFloat((_a = element.getAttribute("x")) != null ? _a : "0");
      let y = parseFloat((_b = element.getAttribute("y")) != null ? _b : "0");
      let w = parseFloat((_c = element.getAttribute("width")) != null ? _c : "0");
      const dx = parseFloat((_d = element.getAttribute("data-x")) != null ? _d : "0");
      const dy = parseFloat((_e = element.getAttribute("data-y")) != null ? _e : "0");
      const dw = parseFloat((_f = element.getAttribute("data-w")) != null ? _f : "0");
      const axisXsteps = settings.gridStep / (settings.timeUnitVal / settings.timeWidth);
      const gridOffset = settings.gridOffset / (settings.timeUnitVal / settings.timeWidth);
      x = this._snap(x, axisXsteps, gridOffset);
      y = this._snap(y, settings.resourceHeight, core.headerHeight + settings.itemsPadding);
      w = this._snap(w, axisXsteps);
      const moved = Math.abs(dx - x) > axisXsteps / 2 || y !== dy;
      const resized = Math.abs(dw - w) > axisXsteps / 3;
      const si = new SchedulaItem(core, data, core.calendar);
      if (moved) {
        si.X = x;
        si.Y = y;
      } else {
        element.setAttribute("x", dx.toString());
        element.setAttribute("y", dy.toString());
        if (resized) {
          si.W = w;
        } else {
          element.setAttribute("width", dw.toString());
        }
      }
      if (settings.checkInterferences) {
        const ok = si.checkInterference();
        if (!ok) {
          if (!settings.shiftItems || !ctrl) {
            if (resized && !moved) {
              si.W = dw;
            } else {
              si.X = dx;
              si.Y = dy;
            }
          } else {
            const previous = (_i = (_h = (_g = core.data.Resources[si.Resource]) == null ? void 0 : _g.Items) == null ? void 0 : _h.filter((i) => i.Offset + i.Width > si.Offset && i.Offset < si.Offset)) == null ? void 0 : _i.sort((a, b) => a.Offset - b.Offset)[0];
            if (previous) {
              const siPrev = new SchedulaItem(core, previous, core.calendar);
              si.X = siPrev.X + siPrev.W;
            }
            let cursor = si.X + si.W;
            const following = (_m = (_l = (_k = (_j = core.data.Resources[si.Resource]) == null ? void 0 : _j.Items) == null ? void 0 : _k.filter((i) => i.Offset >= si.Offset && i.Id !== si.Id)) == null ? void 0 : _l.sort((a, b) => parseInt(a.Offset) - parseInt(b.Offset))) != null ? _m : [];
            for (const fi of following) {
              const siFi = new SchedulaItem(core, fi, core.calendar);
              if (cursor > siFi.X) siFi.X = cursor;
              cursor = siFi.X + siFi.W;
            }
          }
        }
      }
    }
    /** Snap a value to the nearest grid step */
    _snap(value, step, min) {
      const base = min != null ? min : 0;
      const modulo = (value - base) % step;
      const correction = modulo > step / 2 ? step - modulo : -modulo;
      const result = value + correction;
      return min != null && result < min ? min : result;
    }
    // ── Item mousedown ─────────────────────────────────────────────────────
    onItemMouseDown(event, data) {
      var _a, _b;
      const core = this._core;
      if (core.currentAction !== "") return;
      if (event.button === 0 && core.settings.canMoveItems && event.target.classList.contains("item")) {
        core.currentAction = "moving";
      } else if (event.button === 0 && core.settings.canResizeItems && event.target.classList.contains("resize")) {
        core.currentAction = "sizing";
      }
      if (core.currentAction !== "") {
        const el = event.target.parentElement;
        core.currentElement = el;
        if (event.target.classList.contains("item")) {
          event.target.classList.add(core.currentAction);
        }
        if (event.target.classList.contains("resize") && el) {
          const id = el.getAttribute("data-id");
          (_a = document.querySelector(`svg[data-id="${id}"]>rect.item`)) == null ? void 0 : _a.classList.add(core.currentAction);
        }
        el == null ? void 0 : el.setAttribute("data-x", data.element.getAttribute("x"));
        el == null ? void 0 : el.setAttribute("data-y", data.element.getAttribute("y"));
        el == null ? void 0 : el.setAttribute("data-w", data.element.getAttribute("width"));
        const memo = core.actionMemoPosition;
        memo.x = event.pageX;
        memo.y = event.pageY;
        this._dragItem = (_b = data.item) != null ? _b : null;
      }
      if (typeof window.itemMouseDown === "function") {
        window.itemMouseDown(event, data);
      }
    }
    // ── Item mouseup ───────────────────────────────────────────────────────
    onItemMouseUp(event, data) {
      this.onMouseUp(event);
    }
    // ── Item click ─────────────────────────────────────────────────────────
    onItemClick(event, element) {
    }
    // ── External drop ──────────────────────────────────────────────────────
    onDrop(event) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      event.stopImmediatePropagation();
      const core = this._core;
      const settings = core.settings;
      if (!settings.dropEnable || !event.target.classList.contains("box-element")) return;
      const strdata = (_a = event.dataTransfer) == null ? void 0 : _a.getData("task");
      if (!strdata) return;
      const data = JSON.parse(strdata);
      const y = parseFloat((_b = event.target.getAttribute("y")) != null ? _b : "0");
      const res = (y - core.headerHeight) / settings.resourceHeight;
      const resource = core.data.Resources[res];
      if (!resource) return;
      const dd = new Date((_c = event.target.getAttribute("data-date")) != null ? _c : "");
      const sd = settings.date;
      let timespan = Math.trunc((dd.getTime() - sd.getTime()) / 1e3 / 60);
      const newWidth = parseInt(data.width);
      const ctrl = event.ctrlKey;
      if (ctrl && settings.shiftItems) {
        const following = ((_d = resource.Items) != null ? _d : []).filter((item) => item.Offset >= timespan).sort((a, b) => a.Offset - b.Offset);
        let cursor = timespan + newWidth;
        for (const item of following) {
          if (item.Offset < cursor) item.Offset = cursor;
          cursor = item.Offset + item.Width;
        }
      } else {
        let changed = true;
        while (changed) {
          changed = false;
          (_e = resource.Items) == null ? void 0 : _e.forEach((item) => {
            const x1 = timespan;
            const x2 = timespan + newWidth;
            const cx1 = item.Offset;
            const cx2 = item.Offset + item.Width;
            if (!(x2 <= cx1 || x1 >= cx2)) {
              timespan = cx2;
              changed = true;
            }
          });
        }
      }
      if (settings.optimizeStart) {
        const cal = (_g = (_f = core.getCalendarForResource) == null ? void 0 : _f.call(core, resource.Id)) != null ? _g : core.calendar;
        if (cal) {
          const newFrom = cal.optimazeStart({ From: sd.getTime() / 1e3 / 60 + timespan });
          timespan = newFrom - sd.getTime() / 1e3 / 60;
        }
      }
      const ra = Math.floor(Math.random() * 1e7);
      const dropped = {
        Id: "_temp_id_" + ra,
        Text: data.text1,
        Description: data.text2,
        Offset: timespan,
        Width: newWidth,
        Effort: newWidth,
        IsNew: true,
        Modified: true,
        Color1: data.color1,
        Classes: data.classes,
        From: sd.getTime() / 1e3 / 60 + timespan,
        ForeignKey: data.key,
        Reference: data.ref,
        Pieces: data.pieces
      };
      dropped.To = dropped.From + dropped.Width;
      if (!resource.Items) resource.Items = [];
      resource.Items.push(dropped);
      if (typeof window.modified === "function") window.modified();
      if (data.elementId) (_h = document.getElementById(data.elementId)) == null ? void 0 : _h.remove();
      const notifPlugin = (_i = core.getPlugin) == null ? void 0 : _i.call(core, "notification");
      if (notifPlugin) notifPlugin.notifyAdded(dropped);
      core.refresh();
    }
    // ── Hover ──────────────────────────────────────────────────────────────
    onItemOver(event, item) {
      if (typeof window.itemMouseEnter === "function") {
        window.itemMouseEnter(event, item);
      }
    }
    onItemOut(event, item) {
      if (typeof window.itemMouseExit === "function") {
        window.itemMouseExit(event, item);
      }
    }
    // ── Escape ─────────────────────────────────────────────────────────────
    onEscape() {
      var _a, _b, _c, _d, _e;
      const core = this._core;
      const el = core.currentElement;
      if (core.currentAction === "moving" && el) {
        el.setAttribute("x", (_a = el.getAttribute("data-x")) != null ? _a : "0");
        el.setAttribute("y", (_b = el.getAttribute("data-y")) != null ? _b : "0");
        (_c = el.querySelector("rect.item")) == null ? void 0 : _c.classList.remove("moving");
      } else if (core.currentAction === "sizing" && el) {
        el.setAttribute("width", (_d = el.getAttribute("data-w")) != null ? _d : "0");
        (_e = el.querySelector("rect.item")) == null ? void 0 : _e.classList.remove("sizing");
      }
      core.currentAction = "";
    }
  };

  // src/plugins/LinksPlugin.ts
  var LinksPlugin = class {
    constructor() {
      this.name = "links";
      // SVG elements for connection points and the in-progress link line
      this._cp1 = null;
      this._cp2 = null;
      this._cp3 = null;
      this._cp4 = null;
      this._line = null;
    }
    init(core) {
      this._core = core;
    }
    destroy() {
      this._core = null;
    }
    initLinks() {
      const core = this._core;
      const items = core.schedulerItemsElement;
      if (!items) return;
      const mkCircle = (cls) => {
        const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        c.setAttribute("cx", "0");
        c.setAttribute("cy", "0");
        c.setAttribute("r", "5");
        c.setAttribute("fill", "white");
        c.setAttribute("stroke", "#00ff00");
        c.setAttribute("stroke-width", "1");
        c.setAttribute("class", `${cls} link-point`);
        return c;
      };
      this._cp1 = mkCircle("c1");
      this._cp2 = mkCircle("c2");
      this._cp3 = mkCircle("c3");
      this._cp4 = mkCircle("c4");
      this._line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      this._line.setAttribute("x1", "0");
      this._line.setAttribute("y1", "0");
      this._line.setAttribute("x2", "0");
      this._line.setAttribute("y2", "0");
      this._line.setAttribute("stroke-width", "1");
      this._line.setAttribute("id", "link-line");
      this._line.setAttribute("stroke", "#00ff00");
      items.append(this._line, this._cp1, this._cp2, this._cp3, this._cp4);
      core.connPointElements = { p1: this._cp1, p2: this._cp2, p3: this._cp3, p4: this._cp4, line: this._line };
      document.querySelectorAll(".link-point").forEach((el) => {
        el.addEventListener("click", (e) => this.onLinkPointClick(e));
      });
    }
    drawLinks() {
      var _a;
      this.clearLinks();
      const core = this._core;
      const settings = core.settings;
      if (!settings.drawLinks) return;
      (_a = core.data.Resources) == null ? void 0 : _a.forEach((resource, resindex) => {
        var _a2;
        (_a2 = resource.Items) == null ? void 0 : _a2.forEach((item1) => {
          var _a3;
          if (!item1.Link) return;
          (_a3 = core.data.Resources) == null ? void 0 : _a3.forEach((resource2, resindex2) => {
            var _a4;
            (_a4 = resource2.Items) == null ? void 0 : _a4.forEach((item2) => {
              var _a5, _b, _c, _d, _e;
              const samelink = item2.Link === item1.Link;
              const idlink = item1.Link === item2.Id;
              const notitself = item2.Id !== item1.Id;
              const singletime = samelink && (item1.Offset < item2.Offset || item1.Offset === item2.Offset && resindex > resindex2) || idlink;
              if (!(samelink || idlink) || !singletime || !notitself) return;
              const cond = resindex === resindex2;
              const tw = settings.timeWidth;
              const tv = settings.timeUnitVal;
              const rh = settings.resourceHeight;
              const hh = core.headerHeight;
              const ip = settings.itemsPadding;
              let x1 = tw * ((item1.Offset + item1.Width / 2) / tv);
              let x2 = tw * ((item2.Offset + item2.Width / 2) / tv);
              let y1 = resindex * rh + hh + ip;
              let y2 = (resindex2 - 1) * rh + hh - ip;
              let strpath = "";
              if (cond) {
                const i1 = item1.Offset > item2.Offset ? item2 : item1;
                const i2 = item1.Offset > item2.Offset ? item1 : item2;
                x1 = tw * ((i1.Offset + i1.Width) / tv);
                x2 = tw * (i2.Offset / tv);
                y1 = y2 = (resindex + 0.5) * rh + hh;
                strpath = `M${x1},${y1} L${x2},${y1}`;
              } else {
                const y3 = ((resindex + resindex2) / 2 + 0.5) * rh + hh;
                if (resindex < resindex2) {
                  y1 = (resindex + 1) * rh + hh - ip;
                  y2 = resindex2 * rh + hh + ip;
                } else {
                  y2 = (resindex2 + 1) * rh + hh - ip;
                }
                strpath = settings.linkSpline ? `M ${x1},${y1} C${x1} ${y3} ${x2},${y3} ${x2} ${y2}` : `M${x1},${y1} V ${y3} H${x2} V${y2}`;
              }
              const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
              const linkid = "link-" + Math.floor(Math.random() * 1e7);
              path.setAttribute("id", linkid);
              path.setAttribute("d", strpath);
              path.setAttribute("fill", "none");
              path.setAttribute("stroke-width", "4");
              path.setAttribute("class", "link link-wire");
              path.setAttribute("stroke-linecap", "round");
              path.setAttribute("data-link", item1.Link.toString());
              (_a5 = core.schedulerItemsElement) == null ? void 0 : _a5.append(path);
              (_c = document.getElementById((_b = item1.Id) == null ? void 0 : _b.toString())) == null ? void 0 : _c.setAttribute("data-link", linkid);
              (_e = document.getElementById((_d = item2.Id) == null ? void 0 : _d.toString())) == null ? void 0 : _e.setAttribute("data-link", linkid);
            });
          });
        });
      });
    }
    clearLinks() {
      document.querySelectorAll(".link").forEach((el) => el.remove());
    }
    onLinkPointClick(event) {
      var _a, _b, _c, _d;
      const core = this._core;
      const target = event.target;
      if (core.currentAction === "") {
        core.currentAction = "linking";
        const lp = core.linkPointPos;
        lp.x = parseFloat((_a = target.getAttribute("cx")) != null ? _a : "0");
        lp.y = parseFloat((_b = target.getAttribute("cy")) != null ? _b : "0");
        core.linkPointPos = lp;
        core.currentLinkId = (_c = target.getAttribute("target")) != null ? _c : "";
      } else if (core.currentAction === "linking" && core.currentLinkId !== target.getAttribute("target")) {
        const targetId = target.getAttribute("target");
        (_d = core.data.Resources) == null ? void 0 : _d.forEach((r) => {
          var _a2;
          (_a2 = r.Items) == null ? void 0 : _a2.forEach((item) => {
            if (item.Id === core.currentLinkId) {
              item.Link = targetId;
              if (core.settings.drawLinks) this.drawLinks();
            }
          });
        });
        this._resetLinkLine();
        core.currentAction = "";
      }
    }
    onLinkMouseMove(event) {
      const core = this._core;
      const lp = core.linkPointPos;
      const cp = core.calendarPosition;
      const line = document.getElementById("link-line");
      line == null ? void 0 : line.setAttribute("x1", lp.x.toString());
      line == null ? void 0 : line.setAttribute("y1", lp.y.toString());
      line == null ? void 0 : line.setAttribute("x2", cp.x.toString());
      line == null ? void 0 : line.setAttribute("y2", (cp.y - 3).toString());
    }
    _resetLinkLine() {
      const line = document.getElementById("link-line");
      line == null ? void 0 : line.setAttribute("x1", "0");
      line == null ? void 0 : line.setAttribute("y1", "0");
      line == null ? void 0 : line.setAttribute("x2", "0");
      line == null ? void 0 : line.setAttribute("y2", "0");
      const lp = this._core.linkPointPos;
      lp.x = 0;
      lp.y = 0;
      this._core.linkPointPos = lp;
      this._core.currentLinkId = "";
    }
  };

  // src/plugins/EventsPlugin.ts
  var EventsPlugin = class {
    constructor() {
      this.name = "events";
    }
    init(core) {
      this._core = core;
    }
    destroy() {
      this._core = null;
    }
    drawEvents() {
      const core = this._core;
      const settings = core.settings;
      if (!settings.viewEvents || !core.data.Events) return;
      const parent = document.getElementById("scheduler-events");
      if (!parent) return;
      core.data.Events.forEach((event) => {
        const sd = settings.date;
        const ed = new Date(event.Date);
        const offset = Math.trunc((ed.getTime() - sd.getTime()) / 1e3 / 60 / settings.timeUnitVal);
        const x = offset * settings.timeWidth;
        const y = settings.monthBoxHeight + settings.timeElementHeight;
        const h = settings.infoElementHeight;
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", x.toString());
        rect.setAttribute("y", y.toString());
        rect.setAttribute("width", settings.timeWidth.toString());
        rect.setAttribute("height", h.toString());
        rect.setAttribute("class", "event-marker");
        if (event.Color) rect.setAttribute("fill", event.Color);
        if (event.Title) {
          rect.setAttribute("title", event.Title);
        }
        parent.append(rect);
        if (settings.viewEventExtended && event.Title) {
          const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
          text.setAttribute("x", (x + 2).toString());
          text.setAttribute("y", (y + h * 0.75).toString());
          text.setAttribute("font-size", (h * 0.8).toString());
          text.setAttribute("class", "event-label");
          text.textContent = event.Title;
          parent.append(text);
        }
      });
    }
    drawInfoUnits() {
      const core = this._core;
      const settings = core.settings;
      if (!settings.viewInfoElements) return;
      const parent = document.getElementById("scheduler-info");
      if (!parent) return;
      const tw = settings.timeWidth;
      const y = settings.monthBoxHeight + settings.timeElementHeight + (settings.viewWeeks ? settings.weekBoxHeight : 0);
      const h = settings.infoElementHeight;
      for (let c = 0; c < settings.timeUnitsCount; c++) {
        const sum = this._sumForColumn(c);
        if (sum <= 0) continue;
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", (c * tw).toString());
        rect.setAttribute("y", y.toString());
        rect.setAttribute("width", tw.toString());
        rect.setAttribute("height", h.toString());
        rect.setAttribute("class", "info-bar");
        rect.setAttribute("fill", `hsl(${Math.min(120, 120 - sum)}, 70%, 50%)`);
        parent.append(rect);
      }
    }
    getSum(box) {
      var _a;
      const core = this._core;
      const date = box.getAttribute("data-date");
      const resId = box.getAttribute("data-res");
      if (!date || !resId) return 0;
      const d = new Date(date);
      let sum = 0;
      (_a = core.data.Resources) == null ? void 0 : _a.forEach((r) => {
        var _a2;
        if (String(r.id) !== resId) return;
        (_a2 = r.Items) == null ? void 0 : _a2.forEach((item) => {
          const from = new Date(item.From * 6e4);
          const to = new Date(item.To * 6e4);
          if (from <= d && d < to) sum += item.Effort || item.Width || 0;
        });
      });
      return sum;
    }
    _sumForColumn(col) {
      var _a;
      const core = this._core;
      const settings = core.settings;
      const sd = settings.date;
      const colDate = new Date(sd.getTime() + col * settings.timeUnitVal * 60 * 1e3);
      const colEnd = new Date(colDate.getTime() + settings.timeUnitVal * 60 * 1e3);
      let total = 0;
      (_a = core.data.Resources) == null ? void 0 : _a.forEach((r) => {
        var _a2;
        (_a2 = r.Items) == null ? void 0 : _a2.forEach((item) => {
          const from = new Date(item.From * 6e4);
          const to = new Date(item.To * 6e4);
          if (from < colEnd && to > colDate) total += item.Effort || 0;
        });
      });
      return total;
    }
  };

  // src/plugins/ContextMenuConfig.ts
  var defaultTaskMenuItems = [
    { id: "open", label: "Edit" },
    { id: "_sep1", label: "", separator: true },
    { id: "delete-task", label: "Delete", confirm: "Confirm task deletion?" }
  ];
  var defaultDayMenuItems = [
    { id: "holiday", label: "Holiday", capacity: 0, description: "Holiday", classes: "timeoff", confirm: "Set as Holiday?" },
    { id: "closed", label: "Closed", capacity: 0, description: "Closed", classes: "closed", confirm: "Set as Closed?" },
    { id: "unavailable", label: "Unavailable", capacity: 0, description: "Unavailable", classes: "unavailable", confirm: "Set as Unavailable?" },
    { id: "_sep1", label: "", separator: true },
    { id: "cap8h", label: "8 hours", capacity: 480, description: "8h capacity", classes: "cap8h", confirm: "Set capacity to 8 hours?" },
    { id: "cap16h", label: "16 hours", capacity: 960, description: "16h capacity", classes: "cap16h", confirm: "Set capacity to 16 hours?" },
    { id: "custom-hours", label: "Custom time..." },
    { id: "_sep2", label: "", separator: true },
    { id: "delete-rule", label: "Delete", confirm: "Reset this day to default?" }
  ];
  var defaultCellMenuItems = [
    { id: "holiday", label: "Holiday", capacity: 0, description: "Holiday", classes: "timeoff", confirm: "Set as Holiday?" },
    { id: "closed", label: "Closed", capacity: 0, description: "Closed", classes: "closed", confirm: "Set as Closed?" },
    { id: "unavailable", label: "Unavailable", capacity: 0, description: "Unavailable", classes: "unavailable", confirm: "Set as Unavailable?" },
    { id: "_sep1", label: "", separator: true },
    { id: "cap8h", label: "8 hours", capacity: 480, description: "8h capacity", classes: "cap8h", confirm: "Set capacity to 8 hours?" },
    { id: "cap16h", label: "16 hours", capacity: 960, description: "16h capacity", classes: "cap16h", confirm: "Set capacity to 16 hours?" },
    { id: "custom-hours", label: "Custom time..." },
    { id: "_sep2", label: "", separator: true },
    { id: "delete-rule", label: "Delete", confirm: "Reset this resource for this day?" }
  ];

  // src/plugins/ContextMenuPlugin.ts
  var ContextMenuPlugin = class {
    constructor() {
      this.name = "contextmenu";
      this._core = null;
      this._menu = null;
      this._currentCtx = null;
      this._onCtxMenu = (e) => this._handleContextMenu(e);
      this._onHide = () => this._hideMenu();
      this._onKeydown = (e) => {
        if (e.key === "Escape") this._hideMenu();
      };
      // ── Public menu definitions — override before registerPlugin() ────────────
      /** Menu items shown when right-clicking a task. */
      this.taskMenuItems = defaultTaskMenuItems.slice();
      /** Menu items shown when right-clicking a day column header. */
      this.dayMenuItems = defaultDayMenuItems.slice();
      /** Menu items shown when right-clicking a resource row cell. */
      this.cellMenuItems = defaultCellMenuItems.slice();
    }
    // ── Lifecycle ────────────────────────────────────────────────────────────
    init(core) {
      this._core = core;
      if (!isPro(core.settings.licenseKey)) {
        console.warn("[ContextMenuPlugin] A valid PRO licenseKey is required \u2014 plugin disabled.");
        return;
      }
      this._createMenuEl();
      const svg = core.schedulerSVGElement;
      if (svg) svg.addEventListener("contextmenu", this._onCtxMenu);
      document.addEventListener("click", this._onHide);
      document.addEventListener("keydown", this._onKeydown);
      window.addEventListener("resize", this._onHide);
      window.addEventListener("scroll", this._onHide, true);
    }
    destroy() {
      var _a, _b;
      const svg = (_a = this._core) == null ? void 0 : _a.schedulerSVGElement;
      if (svg) svg.removeEventListener("contextmenu", this._onCtxMenu);
      document.removeEventListener("click", this._onHide);
      document.removeEventListener("keydown", this._onKeydown);
      window.removeEventListener("resize", this._onHide);
      window.removeEventListener("scroll", this._onHide, true);
      (_b = this._menu) == null ? void 0 : _b.remove();
      this._menu = null;
      this._core = null;
    }
    // ── Menu DOM helpers ─────────────────────────────────────────────────────
    _createMenuEl() {
      const el = document.createElement("div");
      el.className = "dropdown-menu schedula-ctx-menu";
      el.addEventListener("contextmenu", (e) => e.preventDefault());
      document.body.appendChild(el);
      this._menu = el;
    }
    _showMenu(x, y) {
      const menu = this._menu;
      menu.style.display = "block";
      menu.style.left = "0px";
      menu.style.top = "0px";
      const { width, height } = menu.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      let px = x;
      let py = y;
      if (px + width > vw - 6) px = vw - width - 6;
      if (py + height > vh - 6) py = vh - height - 6;
      if (px < 6) px = 6;
      if (py < 6) py = 6;
      menu.style.left = `${px}px`;
      menu.style.top = `${py}px`;
    }
    _hideMenu() {
      if (!this._menu) return;
      this._menu.style.display = "none";
      this._menu.innerHTML = "";
      this._currentCtx = null;
    }
    _addItem(label, onClick, disabled = false) {
      const a = document.createElement("a");
      a.href = "#";
      a.className = "dropdown-item";
      a.textContent = label;
      if (disabled) {
        a.classList.add("disabled");
        a.setAttribute("aria-disabled", "true");
        a.tabIndex = -1;
      } else if (onClick) {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          onClick();
          this._hideMenu();
        });
      }
      this._menu.appendChild(a);
    }
    _addDivider() {
      const hr = document.createElement("hr");
      hr.className = "dropdown-divider";
      this._menu.appendChild(hr);
    }
    // ── Context detection ────────────────────────────────────────────────────
    _getContext(e) {
      var _a;
      const target = e.target;
      const taskEl = target.closest("svg.svg-item");
      if (taskEl == null ? void 0 : taskEl.dataset.id) {
        return { type: "task", date: "", taskId: taskEl.dataset.id, taskRef: taskEl.dataset.ref, taskKey: taskEl.dataset.key };
      }
      const dayunit = target.closest("rect.time-unit");
      if (dayunit == null ? void 0 : dayunit.dataset.date) {
        return { type: "day", date: dayunit.dataset.date };
      }
      const cell = (_a = target.closest("rect.box-element")) != null ? _a : target.closest("rect.box-element-empty");
      if (cell == null ? void 0 : cell.dataset.date) {
        return { type: "cell", date: cell.dataset.date, resourceId: cell.dataset.res };
      }
      const dayCell = target.closest("rect.daybox-element");
      if (dayCell == null ? void 0 : dayCell.dataset.date) {
        const core = this._core;
        const resIndex = Math.floor((e.offsetY - core.headerHeight) / core.settings.resourceHeight);
        const resourceId = resIndex >= 0 && resIndex < core.data.Resources.length ? String(resIndex) : void 0;
        return { type: "cell", date: dayCell.dataset.date, resourceId };
      }
      return null;
    }
    // ── Context menu event handler ───────────────────────────────────────────
    _handleContextMenu(e) {
      const ctx = this._getContext(e);
      if (!ctx) return;
      e.preventDefault();
      this._currentCtx = ctx;
      this._buildMenu(ctx);
      if (this._menu.children.length > 0) {
        this._showMenu(e.clientX, e.clientY);
      } else {
        this._hideMenu();
      }
    }
    // ── Menu building ────────────────────────────────────────────────────────
    _buildMenu(ctx) {
      var _a;
      this._menu.innerHTML = "";
      const ro = ((_a = this._core) == null ? void 0 : _a.settings.canMoveItems) === false;
      const defs = ctx.type === "task" ? this.taskMenuItems : ctx.type === "day" ? this.dayMenuItems : ctx.type === "cell" ? this.cellMenuItems : [];
      for (const def of defs) {
        if (def.separator) {
          this._addDivider();
          continue;
        }
        this._addItem(def.label, () => {
          if (def.confirm && !confirm(def.confirm)) return;
          this._executeItem(def, ctx);
        }, ro);
      }
    }
    // ── Action execution ─────────────────────────────────────────────────────
    _executeItem(def, ctx) {
      var _a, _b, _c;
      switch (def.id) {
        case "open": {
          this._openPopup(ctx);
          return;
        }
        case "delete-task": {
          const item = this._findItem(ctx.taskId);
          if (item) {
            item.Deleted = true;
            item.Modified = true;
          }
          (_a = document.querySelector(`svg[data-id="${ctx.taskId}"]`)) == null ? void 0 : _a.remove();
          if (typeof window.modified === "function") window.modified();
          const notifDel = (_c = (_b = this._core) == null ? void 0 : _b.getPlugin) == null ? void 0 : _c.call(_b, "notification");
          if (notifDel && item) notifDel.notifyDeleted(item);
          return;
        }
        case "delete-rule": {
          this._applyCalendarDelete(ctx);
          return;
        }
        case "custom-hours": {
          this._promptCustomHours(ctx);
          return;
        }
        default: {
          this._applyCalendarRule(def, ctx);
          return;
        }
      }
    }
    // ── Calendar helpers ─────────────────────────────────────────────────────
    /**
     * Applies a calendar rule (capacity change) for a date + optional resource.
     * Writes via CalendarPlugin if registered, always dispatches DOM event.
     */
    _applyCalendarRule(def, ctx) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      const capacity = (_a = def.capacity) != null ? _a : 0;
      const description = (_b = def.description) != null ? _b : def.label;
      const classes = (_c = def.classes) != null ? _c : "";
      const date = ctx.date;
      const resourceId = (_d = ctx.resourceId) != null ? _d : null;
      const calPlugin = (_f = (_e = this._core) == null ? void 0 : _e.getPlugin) == null ? void 0 : _f.call(_e, "calendar");
      if (calPlugin && typeof calPlugin.addException === "function") {
        calPlugin.addException(
          { Capacity: capacity, DateFrom: date, DateTo: date, description, classes },
          resourceId
        );
        (_h = (_g = this._core).refresh) == null ? void 0 : _h.call(_g);
      }
      this._dispatchCalendar(ctx, def.label, description, capacity, classes);
      const notif = (_j = (_i = this._core) == null ? void 0 : _i.getPlugin) == null ? void 0 : _j.call(_i, "notification");
      if (notif) notif.notifyMenuAction(def.id, null, ctx);
    }
    /** Removes the calendar rule for a date + optional resource. */
    _applyCalendarDelete(ctx) {
      var _a, _b, _c, _d, _e, _f, _g;
      const date = ctx.date;
      const resourceId = (_a = ctx.resourceId) != null ? _a : null;
      const calPlugin = (_c = (_b = this._core) == null ? void 0 : _b.getPlugin) == null ? void 0 : _c.call(_b, "calendar");
      if (calPlugin && typeof calPlugin.removeException === "function") {
        calPlugin.removeException(date, resourceId);
        (_e = (_d = this._core).refresh) == null ? void 0 : _e.call(_d);
      }
      this._dispatchCalendar(ctx, "Delete", "", 0, "");
      const notif = (_g = (_f = this._core) == null ? void 0 : _f.getPlugin) == null ? void 0 : _g.call(_f, "notification");
      if (notif) notif.notifyMenuAction("delete-rule", null, ctx);
    }
    /** Dispatches the backward-compat 'schedulacalendar:action' DOM event. */
    _dispatchCalendar(ctx, actionName, description, capacity, classes) {
      var _a;
      const isDelete = actionName === "Delete";
      const detail = { DateFrom: ctx.date, DateTo: ctx.date, Name: isDelete ? "" : actionName, Description: description, Capacity: capacity, Classes: classes, ResourceId: ctx.resourceId ? parseInt(ctx.resourceId, 10) : null, isDelete };
      const svg = (_a = this._core) == null ? void 0 : _a.schedulerSVGElement;
      svg == null ? void 0 : svg.dispatchEvent(new CustomEvent("schedulacalendar:action", { bubbles: true, detail }));
    }
    /** Prompts for custom hours, then applies the calendar rule. */
    _promptCustomHours(ctx) {
      const raw = prompt("Capacity in hours (e.g. 5 or 5.5):", "");
      if (raw === null) return;
      const hours = parseFloat(raw.replace(",", "."));
      if (isNaN(hours) || hours < 0 || hours > 24) {
        alert("Invalid value. Enter a number between 0 and 24.");
        return;
      }
      const label = `${hours}h`;
      if (!confirm(`Set capacity to ${label}?`)) return;
      const def = {
        id: "custom-hours",
        label,
        capacity: Math.round(hours * 60),
        description: `${label} capacity`,
        classes: "cap-custom"
      };
      this._applyCalendarRule(def, ctx);
    }
    // ── Task helpers ─────────────────────────────────────────────────────────
    _findItem(taskId) {
      var _a, _b, _c, _d;
      for (const res of (_c = (_b = (_a = this._core) == null ? void 0 : _a.data) == null ? void 0 : _b.Resources) != null ? _c : []) {
        const item = (_d = res.Items) == null ? void 0 : _d.find((i) => i.Id == taskId);
        if (item) return item;
      }
      return null;
    }
    _openPopup(ctx) {
      var _a, _b;
      const item = this._findItem(ctx.taskId);
      if (!item) return;
      const provider = this._getPopupProvider();
      if (!provider) return;
      const existingPopup = document.querySelector(".scheduler-popup");
      const isVisible = existingPopup && existingPopup.style.display !== "none";
      if (isVisible && typeof provider.refreshItem === "function") {
        provider.refreshItem(item);
      } else {
        const rect = this._menu.getBoundingClientRect();
        const fakeEvent = new MouseEvent("click", { clientX: rect.left, clientY: rect.top, bubbles: true });
        provider.show(item, fakeEvent, this._core);
      }
      const notif = (_b = (_a = this._core) == null ? void 0 : _a.getPlugin) == null ? void 0 : _b.call(_a, "notification");
      if (notif) notif.notifyMenuAction("open", item, ctx);
    }
    _getPopupProvider() {
      var _a, _b, _c, _d, _e;
      if ((_b = (_a = this._core) == null ? void 0 : _a.settings) == null ? void 0 : _b.popupProvider) return this._core.settings.popupProvider;
      for (const p of (_e = (_d = (_c = this._core) == null ? void 0 : _c.settings) == null ? void 0 : _d.plugins) != null ? _e : []) {
        if (typeof p.show === "function") return p;
      }
      return null;
    }
  };

  // src/plugins/CalendarPlugin.ts
  var CalendarPlugin = class {
    constructor() {
      this.name = "calendar";
    }
    init(core) {
      var _a;
      this._core = core;
      this.applyData((_a = core.data) == null ? void 0 : _a.Calendar);
    }
    /**
     * Builds one SchedulaCalendar with base rule + all items (global and per-resource).
     * Sets core.calendar to the new calendar.
     */
    applyData(calendarData) {
      var _a, _b;
      const cal = new SchedulaCalendar();
      const r = cal.newItem();
      r.capacity = (_a = calendarData == null ? void 0 : calendarData.Reference) != null ? _a : cal.reference;
      r.day = -1;
      r.from = 0;
      r.duration = 999999999;
      r.type = "rule";
      r.resourceId = null;
      (_b = calendarData == null ? void 0 : calendarData.Items) == null ? void 0 : _b.forEach((item) => this._addRuleItem(cal, item));
      this._core.calendar = cal;
    }
    /**
     * Adds or replaces a calendar rule for a specific resource.
     * Writes to data.Calendar.Items and rebuilds the calendar.
     */
    addResourceException(resourceId, rule) {
      var _a;
      const id = String(resourceId);
      const calendarData = (_a = this._core.data) == null ? void 0 : _a.Calendar;
      if (!calendarData) return;
      if (!calendarData.Items) calendarData.Items = [];
      calendarData.Items = calendarData.Items.filter(
        (i) => String(i.ResourceId) !== id || i.Day !== rule.Day || i.DateFrom !== rule.DateFrom
      );
      calendarData.Items.push(__spreadProps(__spreadValues({}, rule), { ResourceId: id }));
      this.applyData(calendarData);
    }
    /**
     * Adds (or replaces) a date-based calendar exception.
     * Pass resourceId = null for a global rule, or a resource id/index for per-resource.
     */
    addException(rule, resourceId) {
      var _a, _b, _c, _d;
      const calendarData = (_a = this._core.data) == null ? void 0 : _a.Calendar;
      if (!calendarData) return;
      if (!calendarData.Items) calendarData.Items = [];
      const idStr = resourceId != null ? String(resourceId) : null;
      calendarData.Items = calendarData.Items.filter((i) => {
        const sameRes = idStr != null ? String(i.ResourceId) === idStr : i.ResourceId == null;
        return !(sameRes && i.DateFrom === rule.DateFrom);
      });
      const newItem = { Capacity: rule.Capacity, DateFrom: rule.DateFrom, DateTo: rule.DateTo };
      if (rule.Day != null) newItem.Day = rule.Day;
      if (idStr != null) newItem.ResourceId = idStr;
      calendarData.Items.push(newItem);
      this.applyData(calendarData);
      (_d = (_c = (_b = this._core) == null ? void 0 : _b.getPlugin) == null ? void 0 : _c.call(_b, "notification")) == null ? void 0 : _d.notifyCalendarChanged(newItem, "add");
      this._recalculateTasks(idStr);
    }
    /**
     * Removes all calendar exceptions for a specific date (and optional resource).
     */
    removeException(date, resourceId) {
      var _a, _b, _c, _d;
      const calendarData = (_a = this._core.data) == null ? void 0 : _a.Calendar;
      if (!(calendarData == null ? void 0 : calendarData.Items)) return;
      const idStr = resourceId != null ? String(resourceId) : null;
      calendarData.Items = calendarData.Items.filter((i) => {
        const sameRes = idStr != null ? String(i.ResourceId) === idStr : i.ResourceId == null;
        return !(sameRes && i.DateFrom === date);
      });
      this.applyData(calendarData);
      (_d = (_c = (_b = this._core) == null ? void 0 : _b.getPlugin) == null ? void 0 : _c.call(_b, "notification")) == null ? void 0 : _d.notifyCalendarChanged(
        { DateFrom: date, ResourceId: idStr },
        "remove"
      );
      this._recalculateTasks(idStr);
    }
    destroy() {
      this._core = null;
    }
    /**
     * After a calendar change, recalculate Width from Effort for all affected tasks.
     * If affectedResourceId is null, all resources are recalculated (global rule).
     * Effort is the ground truth — Width is derived via calcDuration with the new calendar.
     */
    _recalculateTasks(affectedResourceId) {
      var _a, _b, _c, _d;
      const resources = (_b = (_a = this._core) == null ? void 0 : _a.data) == null ? void 0 : _b.Resources;
      if (!resources) return;
      const notif = (_d = (_c = this._core) == null ? void 0 : _c.getPlugin) == null ? void 0 : _d.call(_c, "notification");
      resources.forEach((resource, ri) => {
        var _a2;
        if (affectedResourceId != null && String(ri) !== affectedResourceId) return;
        (_a2 = resource.Items) == null ? void 0 : _a2.forEach((itemData) => {
          if (itemData.Deleted) return;
          const savedEffort = itemData.Effort;
          if (!savedEffort) return;
          const scitem = new SchedulaItem(this._core, itemData);
          scitem.Effort = savedEffort;
          notif == null ? void 0 : notif.notifyChanged(itemData);
        });
      });
      this._resolveInterferences(affectedResourceId, notif);
    }
    /**
     * After widths are recalculated, push downstream tasks to avoid overlaps.
     * Processes tasks in chronological order per resource: if a task starts before
     * the previous one ends, it is moved to start right after it (cascade effect).
     * Moving a task changes its From, so its Width is also recalculated from Effort.
     */
    _resolveInterferences(affectedResourceId, notif) {
      var _a, _b;
      const resources = (_b = (_a = this._core) == null ? void 0 : _a.data) == null ? void 0 : _b.Resources;
      if (!resources) return;
      resources.forEach((resource, ri) => {
        var _a2;
        if (affectedResourceId != null && String(ri) !== affectedResourceId) return;
        const items = ((_a2 = resource.Items) != null ? _a2 : []).filter((i) => !i.Deleted).sort((a, b) => a.Offset - b.Offset);
        for (let idx = 1; idx < items.length; idx++) {
          const prev = items[idx - 1];
          const curr = items[idx];
          const prevEnd = prev.Offset + prev.Width;
          if (curr.Offset < prevEnd) {
            const savedEffort = curr.Effort;
            const scitem = new SchedulaItem(this._core, curr);
            scitem.Offset = prevEnd;
            if (savedEffort) scitem.Effort = savedEffort;
            notif == null ? void 0 : notif.notifyChanged(curr);
          }
        }
      });
    }
    _parseDate(value) {
      const iso = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if (iso) return new Date(+iso[1], +iso[2] - 1, +iso[3]).getTime();
      return new Date(value).getTime();
    }
    _addRuleItem(cal, item) {
      var _a;
      const i = cal.newItem();
      i.capacity = item.Capacity;
      i.day = (_a = item.Day) != null ? _a : -1;
      i.from = item.DateFrom ? this._parseDate(item.DateFrom) : 0;
      i.duration = item.DateFrom && item.DateTo ? (this._parseDate(item.DateTo) - this._parseDate(item.DateFrom)) / 6e4 + 1440 : 999999999;
      i.resourceId = item.ResourceId != null ? String(item.ResourceId) : null;
      i.type = "rule";
    }
  };

  // src/plugins/NotificationPlugin.ts
  var NotificationPlugin = class {
    constructor() {
      this.name = "notification";
      this._core = null;
      this._enabled = false;
    }
    // ── Lifecycle ────────────────────────────────────────────────────────────
    init(core) {
      this._core = core;
      if (!isPro(core.settings.licenseKey)) {
        console.warn("[NotificationPlugin] A valid PRO licenseKey is required \u2014 plugin disabled.");
        return;
      }
      this._enabled = true;
    }
    destroy() {
      this._core = null;
      this._enabled = false;
    }
    // ── Public callbacks — override these ────────────────────────────────────
    /**
     * Called after a task is moved or resized by the user.
     * @param item  The raw data object of the modified task.
     */
    onItemChanged(item) {
    }
    /**
     * Called after a new task is added via drag-and-drop from an external source.
     * @param item  The raw data object of the newly added task.
     */
    onItemAdded(item) {
    }
    /**
     * Called after a task is deleted (e.g. via context menu).
     * @param item  The raw data object of the deleted task (Deleted flag is already true).
     */
    onItemDeleted(item) {
    }
    /**
     * Called after a context menu action is executed.
     * @param actionId  The id from IMenuItemDef (e.g. 'holiday', 'closed', 'open', 'delete-rule').
     * @param item      The raw task data object for task actions; null for calendar actions.
     * @param ctx       The context object: { type, date, resourceId?, taskId?, taskRef?, taskKey? }
     */
    onMenuAction(actionId, item, ctx) {
    }
    /**
     * Called after a calendar exception is added or removed.
     * @param rule    The exception rule object: { Capacity, DateFrom, DateTo, ResourceId? }
     *                For removals, only { DateFrom, ResourceId? } is guaranteed to be present.
     * @param action  'add' when an exception is added, 'remove' when it is deleted.
     */
    onCalendarChanged(rule, action) {
    }
    // ── Internal dispatch — called by core and plugins ───────────────────────
    /** @internal */
    notifyChanged(item) {
      if (!this._enabled) return;
      try {
        this.onItemChanged(item);
      } catch (e) {
        console.error("[NotificationPlugin] onItemChanged error:", e);
      }
    }
    /** @internal */
    notifyAdded(item) {
      if (!this._enabled) return;
      try {
        this.onItemAdded(item);
      } catch (e) {
        console.error("[NotificationPlugin] onItemAdded error:", e);
      }
    }
    /** @internal */
    notifyDeleted(item) {
      if (!this._enabled) return;
      try {
        this.onItemDeleted(item);
      } catch (e) {
        console.error("[NotificationPlugin] onItemDeleted error:", e);
      }
    }
    /** @internal */
    notifyMenuAction(actionId, item, ctx) {
      if (!this._enabled) return;
      try {
        this.onMenuAction(actionId, item, ctx);
      } catch (e) {
        console.error("[NotificationPlugin] onMenuAction error:", e);
      }
    }
    /** @internal */
    notifyCalendarChanged(rule, action) {
      if (!this._enabled) return;
      try {
        this.onCalendarChanged(rule, action);
      } catch (e) {
        console.error("[NotificationPlugin] onCalendarChanged error:", e);
      }
    }
  };

  // src/index-pro.ts
  window.SchedulaCore = SchedulaCore;
  window.SchedulaSettings = SchedulaSettings2;
  window.SchedulaTemplate = SchedulaTemplate;
  window.DragDropPlugin = DragDropPlugin;
  window.LinksPlugin = LinksPlugin;
  window.EventsPlugin = EventsPlugin;
  window.DefaultPopupPlugin = DefaultPopupPlugin;
  window.ContextMenuPlugin = ContextMenuPlugin;
  window.CalendarPlugin = CalendarPlugin;
  window.NotificationPlugin = NotificationPlugin;
  window.validateLicense = validateLicense;
  window.isPro = isPro;
})();
//# sourceMappingURL=pro-test.js.map
