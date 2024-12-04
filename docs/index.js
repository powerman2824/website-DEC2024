const classA = () => {
    document.getElementById("oct1").value = 10;
    document.getElementById("oct2").value = 0;
    document.getElementById("oct3").value = 0;
    document.getElementById("oct4").value = 0;
    document.getElementById("sub1").value = 255;
    document.getElementById("sub2").value = 0;
    document.getElementById("sub3").value = 0;
    document.getElementById("sub4").value = 0;
  };
  const classB = () => {
    document.getElementById("oct1").value = 172;
    document.getElementById("oct2").value = 16;
    document.getElementById("oct3").value = 0;
    document.getElementById("oct4").value = 0;
    document.getElementById("sub1").value = 255;
    document.getElementById("sub2").value = 255;
    document.getElementById("sub3").value = 0;
    document.getElementById("sub4").value = 0;
  };
  const classC = () => {
    document.getElementById("oct1").value = 192;
    document.getElementById("oct2").value = 168;
    document.getElementById("oct3").value = 0;
    document.getElementById("oct4").value = 0;
    document.getElementById("sub1").value = 255;
    document.getElementById("sub2").value = 255;
    document.getElementById("sub3").value = 255;
    document.getElementById("sub4").value = 0;
  };
  const getResult = () => {
    let oct1 = document.getElementById("oct1").value;
    let oct2 = document.getElementById("oct2").value;
    let oct3 = document.getElementById("oct3").value;
    let oct4 = document.getElementById("oct4").value;
    let sub1 = document.getElementById("sub1").value;
    let sub2 = document.getElementById("sub2").value;
    let sub3 = document.getElementById("sub3").value;
    let sub4 = document.getElementById("sub4").value;
    if (oct1 >= 1 && oct1 < 126) {
      let octA = "Class A🍎 IPv4 Address";
      document.getElementById("result1").innerHTML = octA;
      if (oct1 >= 10 && oct1 < 11 && sub1 >= 255 && sub1 < 256) {
        let octPriA = "Private🔒 ";
        document.getElementById("result3").innerHTML = octPriA;
      } else {
      document.getElementById("result3").innerHTML = "";
    };
    } else if (oct1 >= 127 && oct1 < 128) {
      let octR = "Loopback🔗 Address";
      document.getElementById("result1").innerHTML = octR;
      document.getElementById("result3").innerHTML = "";
    } else if (oct1 >= 128 && oct1 < 192) {
      let octB = "Class B🐝 IPv4 Address";
      document.getElementById("result1").innerHTML = octB;
      if (oct1 >= 172 && oct1 < 173 && oct2 >= 16 && oct2 < 32 && sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256) {
        let octPriB = "Private🔒 ";
        document.getElementById("result3").innerHTML = octPriB;
      } else {
      document.getElementById("result3").innerHTML = "";
    };
    } else if (oct1 >= 192 && oct1 < 224) {
      let octC = "Class C🐱 IPv4 Address";
      document.getElementById("result1").innerHTML = octC;
      if (oct1 >= 192 && oct1 < 193 && oct2 >= 168 && oct2 < 169 && sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 255 && sub3 < 256) {
        let octPriC = "Private🔒 ";
        document.getElementById("result3").innerHTML = octPriC;
      } else {
      document.getElementById("result3").innerHTML = "";
    };
    } else if (oct1 >= 224 && oct1 < 240) {
      let octD = "Class D🐶 Multicast IPv4 Address";
      document.getElementById("result1").innerHTML = octD;
      document.getElementById("result3").innerHTML = "";
    } else if (oct1 >= 240 && oct1 < 256) {
      let octE = "Class E🐘 Reserved IPv4 Address";
      document.getElementById("result1").innerHTML = octE;
      document.getElementById("result3").innerHTML = "";
    } else {
      document.getElementById("result1").innerHTML = "";
      document.getElementById("result3").innerHTML = "";
    };
    document.getElementById("result").innerHTML = `📮:${oct1}.${oct2}.${oct3}.${oct4}`;
  //   Save this for something later
    // document.getElementById("result2").innerHTML = `${sub1}.${sub2}.${sub3}.${sub4}`;
    subNet();
    infoNet();
  };
  const subNet = () => {
    let sub1 = document.getElementById("sub1").value;
    let sub2 = document.getElementById("sub2").value;
    let sub3 = document.getElementById("sub3").value;
    let sub4 = document.getElementById("sub4").value;
    if (sub1 >= 0 && sub1 < 1 && sub2 >= 0 && sub2 < 1 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1){
      let pre0 = "/0";
      document.getElementById("result4").innerHTML = pre0;
    } else if (sub1 >= 128 && sub1 < 129 && sub2 >= 0 && sub2 < 1 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
      let pre1 = "/1";
      document.getElementById("result4").innerHTML = pre1;
    } else if (sub1 >= 192 && sub1 < 193 && sub2 >= 0 && sub2 < 1 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
      let pre2 = "/2";
      document.getElementById("result4").innerHTML = pre2;
    } else if (sub1 >= 224 && sub1 < 225 && sub2 >= 0 && sub2 < 1 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
      let pre3 = "/3";
      document.getElementById("result4").innerHTML = pre3;
    } else if (sub1 >= 240 && sub1 < 241 && sub2 >= 0 && sub2 < 1 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
      let pre4 = "/4";
      document.getElementById("result4").innerHTML = pre4;
    } else if (sub1 >= 248 && sub1 < 249 && sub2 >= 0 && sub2 < 1 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
      let pre5 = "/5";
      document.getElementById("result4").innerHTML = pre5;
    } else if (sub1 >= 252 && sub1 < 253 && sub2 >= 0 && sub2 < 1 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
      let pre6 = "/6";
      document.getElementById("result4").innerHTML = pre6;
    } else if (sub1 >= 254 && sub1 < 255 && sub2 >= 0 && sub2 < 1 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
      let pre7 = "/7";
      document.getElementById("result4").innerHTML = pre7;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 0 && sub2 < 1 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
      let pre8 = "/8";
      document.getElementById("result4").innerHTML = pre8;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 128 && sub2 < 129 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
      let pre9 = "/9";
      document.getElementById("result4").innerHTML = pre9;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 192 && sub2 < 193 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
      let pre10 = "/10";
      document.getElementById("result4").innerHTML = pre10;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 224 && sub2 < 225 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
      let pre11 = "/11";
      document.getElementById("result4").innerHTML = pre11;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 240 && sub2 < 241 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
      let pre12 = "/12";
      document.getElementById("result4").innerHTML = pre12;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 248 && sub2 < 249 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
      let pre13 = "/13";
      document.getElementById("result4").innerHTML = pre13;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 252 && sub2 < 253 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
      let pre14 = "/14";
      document.getElementById("result4").innerHTML = pre14;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 254 && sub2 < 255 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
      let pre15 = "/15";
      document.getElementById("result4").innerHTML = pre15;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
      let pre16 = "/16";
      document.getElementById("result4").innerHTML = pre16;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 128 && sub3 < 129 && sub4 >= 0 && sub4 < 1) {
      let pre17 = "/17";
      document.getElementById("result4").innerHTML = pre17;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 192 && sub3 < 193 && sub4 >= 0 && sub4 < 1) {
      let pre18 = "/18";
      document.getElementById("result4").innerHTML = pre18;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 224 && sub3 < 225 && sub4 >= 0 && sub4 < 1) {
      let pre19 = "/19";
      document.getElementById("result4").innerHTML = pre19;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 240 && sub3 < 241 && sub4 >= 0 && sub4 < 1) {
      let pre20 = "/20";
      document.getElementById("result4").innerHTML = pre20;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 248 && sub3 < 249 && sub4 >= 0 && sub4 < 1) {
      let pre21 = "/21";
      document.getElementById("result4").innerHTML = pre21;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 252 && sub3 < 253 && sub4 >= 0 && sub4 < 1) {
      let pre22 = "/22";
      document.getElementById("result4").innerHTML = pre22;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 254 && sub3 < 255 && sub4 >= 0 && sub4 < 1) {
      let pre23 = "/23";
      document.getElementById("result4").innerHTML = pre23;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 255 && sub3 < 256 && sub4 >= 0 && sub4 < 1) {
      let pre24 = "/24";
      document.getElementById("result4").innerHTML = pre24;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 255 && sub3 < 256 && sub4 >= 128 && sub4 < 129) {
      let pre25 = "/25";
      document.getElementById("result4").innerHTML = pre25;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 255 && sub3 < 256 && sub4 >= 192 && sub4 < 193) {
      let pre26 = "/26";
      document.getElementById("result4").innerHTML = pre26;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 255 && sub3 < 256 && sub4 >= 224 && sub4 < 225) {
      let pre27 = "/27";
      document.getElementById("result4").innerHTML = pre27;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 255 && sub3 < 256 && sub4 >= 240 && sub4 < 241) {
      let pre28 = "/28";
      document.getElementById("result4").innerHTML = pre28;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 255 && sub3 < 256 && sub4 >= 248 && sub4 < 249) {
      let pre29 = "/29";
      document.getElementById("result4").innerHTML = pre29;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 255 && sub3 < 256 && sub4 >= 252 && sub4 < 253) {
      let pre30 = "/30";
      document.getElementById("result4").innerHTML = pre30;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 255 && sub3 < 256 && sub4 >= 254 && sub4 < 255) {
      let pre31 = "/31";
      document.getElementById("result4").innerHTML = pre31;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 255 && sub3 < 256 && sub4 >= 255 && sub4 < 256) {
      let pre32 = "/32";
      document.getElementById("result4").innerHTML = pre32;
    } else {
      document.getElementById("result4").innerHTML = "";
    };
    // document.getElementById("result4").innerHTML = `${sub1}.${sub2}.${sub3}.${sub4}`;
  };
  const infoNet = () => {
    let oct1 = document.getElementById("oct1").value;
    let oct2 = document.getElementById("oct2").value;
    let oct3 = document.getElementById("oct3").value;
    let oct4 = document.getElementById("oct4").value;
    let sub1 = document.getElementById("sub1").value;
    let sub2 = document.getElementById("sub2").value;
    let sub3 = document.getElementById("sub3").value;
    let sub4 = document.getElementById("sub4").value;
    if (sub1 >= 255 && sub1 < 256 && sub2 >= 0 && sub2 < 1 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
        let bin1 = oct1;
        let bin2 = 0;
        let bin3 = 0;
        let bin4 = 0;
        document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${bin2}.${bin3}.${bin4}`;
        document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${bin2}.${bin3}.${bin4 + 1}`;
        document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${bin2 + 255}.${bin3 + 255}.${bin4 + 254}`;
        document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${bin2 + 255}.${bin3 + 255}.${bin4 + 255}`;
    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
        let bin1 = oct1;
        let bin2 = oct2;
        let bin3 = 0;
        let bin4 = 0;
        document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${bin2}.${bin3}.${bin4}`;
        document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${bin2}.${bin3}.${bin4 + 1}`;
        document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${bin2}.${bin3 + 255}.${bin4 + 254}`;
        document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${bin2}.${bin3 + 255}.${bin4 + 255}`;

    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 255 && sub3 < 256 && sub4 >= 0 && sub4 < 1) {
        let bin1 = oct1;
        let bin2 = oct2;
        let bin3 = oct3;
        let bin4 = 0;
        document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${bin2}.${bin3}.${bin4}`;
        document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${bin2}.${bin3}.${bin4 + 1}`;
        document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${bin2}.${bin3}.${bin4 + 254}`;
        document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${bin2}.${bin3}.${bin4 + 255}`;

    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 128 && sub2 < 129 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
        let bin1 = oct1;
        let bin2 = Math.floor(oct2 / 128);
        let bin3 = 0;
        let bin4 = 0;
        let magicNum1 = bin2 * 128;
        let magicNum2 = bin2 * 128 + 128 - 1;  
        document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${magicNum1}.${bin3}.${bin4}`;
        document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${magicNum1}.${bin3}.${bin4 + 1}`;
        document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${magicNum2}.${bin3 + 255}.${bin4 + 254}`;
        document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${magicNum2}.${bin3 + 255}.${bin4 + 255}`;

    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 192 && sub2 < 193 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
      let bin1 = oct1;
      let bin2 = Math.floor(oct2 / 64);
      let bin3 = 0;
      let bin4 = 0;
      let magicNum1 = bin2 * 64;
      let magicNum2 = bin2 * 64 + 64 - 1;  
      document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${magicNum1}.${bin3}.${bin4}`;
      document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${magicNum1}.${bin3}.${bin4 + 1}`;
      document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${magicNum2}.${bin3 + 255}.${bin4 + 254}`;
      document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${magicNum2}.${bin3 + 255}.${bin4 + 255}`;

    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 224 && sub2 < 225 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
      let bin1 = oct1;
      let bin2 = Math.floor(oct2 / 32);
      let bin3 = 0;
      let bin4 = 0;
      let magicNum1 = bin2 * 32;
      let magicNum2 = bin2 * 32 + 32 - 1;  
      document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${magicNum1}.${bin3}.${bin4}`;
      document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${magicNum1}.${bin3}.${bin4 + 1}`;
      document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${magicNum2}.${bin3 + 255}.${bin4 + 254}`;
      document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${magicNum2}.${bin3 + 255}.${bin4 + 255}`;

    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 240 && sub2 < 241 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
      let bin1 = oct1;
      let bin2 = Math.floor(oct2 / 16);
      let bin3 = 0;
      let bin4 = 0;
      let magicNum1 = bin2 * 16;
      let magicNum2 = bin2 * 16 + 16 - 1;  
      document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${magicNum1}.${bin3}.${bin4}`;
      document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${magicNum1}.${bin3}.${bin4 + 1}`;
      document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${magicNum2}.${bin3 + 255}.${bin4 + 254}`;
      document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${magicNum2}.${bin3 + 255}.${bin4 + 255}`;

    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 248 && sub2 < 249 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
      let bin1 = oct1;
      let bin2 = Math.floor(oct2 / 8);
      let bin3 = 0;
      let bin4 = 0;
      let magicNum1 = bin2 * 8;
      let magicNum2 = bin2 * 8 + 8 - 1;  
      document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${magicNum1}.${bin3}.${bin4}`;
      document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${magicNum1}.${bin3}.${bin4 + 1}`;
      document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${magicNum2}.${bin3 + 255}.${bin4 + 254}`;
      document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${magicNum2}.${bin3 + 255}.${bin4 + 255}`;

    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 252 && sub2 < 253 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
      let bin1 = oct1;
      let bin2 = Math.floor(oct2 / 4);
      let bin3 = 0;
      let bin4 = 0;
      let magicNum1 = bin2 * 4;
      let magicNum2 = bin2 * 4 + 4 - 1;  
      document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${magicNum1}.${bin3}.${bin4}`;
      document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${magicNum1}.${bin3}.${bin4 + 1}`;
      document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${magicNum2}.${bin3 + 255}.${bin4 + 254}`;
      document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${magicNum2}.${bin3 + 255}.${bin4 + 255}`;

    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 254 && sub2 < 255 && sub3 >= 0 && sub3 < 1 && sub4 >= 0 && sub4 < 1) {
      let bin1 = oct1;
      let bin2 = Math.floor(oct2 / 2);
      let bin3 = 0;
      let bin4 = 0;
      let magicNum1 = bin2 * 2;
      let magicNum2 = bin2 * 2 + 2 - 1;  
      document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${magicNum1}.${bin3}.${bin4}`;
      document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${magicNum1}.${bin3}.${bin4 + 1}`;
      document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${magicNum2}.${bin3 + 255}.${bin4 + 254}`;
      document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${magicNum2}.${bin3 + 255}.${bin4 + 255}`;

    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 128 && sub3 < 129 && sub4 >= 0 && sub4 < 1) {
      let bin1 = oct1;
      let bin2 = oct2;
      let bin3 = Math.floor(oct3 / 128);
      let bin4 = 0;
      let magicNum1 = bin3 * 128;
      let magicNum2 = bin3 * 128 + 128 - 1;  
      document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${bin2}.${magicNum1}.${bin4}`;
      document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${bin2}.${magicNum1}.${bin4 + 1}`;
      document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${bin2}.${magicNum2}.${bin4 + 254}`;
      document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${bin2}.${magicNum2}.${bin4 + 255}`;

    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 192 && sub3 < 193 && sub4 >= 0 && sub4 < 1) {
      let bin1 = oct1;
      let bin2 = oct2;
      let bin3 = Math.floor(oct3 / 64);
      let bin4 = 0;
      let magicNum1 = bin3 * 64;
      let magicNum2 = bin3 * 64 + 64 - 1;  
      document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${bin2}.${magicNum1}.${bin4}`;
      document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${bin2}.${magicNum1}.${bin4 + 1}`;
      document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${bin2}.${magicNum2}.${bin4 + 254}`;
      document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${bin2}.${magicNum2}.${bin4 + 255}`;

    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 224 && sub3 < 225 && sub4 >= 0 && sub4 < 1) {
      let bin1 = oct1;
      let bin2 = oct2;
      let bin3 = Math.floor(oct3 / 32);
      let bin4 = 0;
      let magicNum1 = bin3 * 32;
      let magicNum2 = bin3 * 32 + 32 - 1;  
      document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${bin2}.${magicNum1}.${bin4}`;
      document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${bin2}.${magicNum1}.${bin4 + 1}`;
      document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${bin2}.${magicNum2}.${bin4 + 254}`;
      document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${bin2}.${magicNum2}.${bin4 + 255}`;

    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 240 && sub3 < 241 && sub4 >= 0 && sub4 < 1) {
      let bin1 = oct1;
      let bin2 = oct2;
      let bin3 = Math.floor(oct3 / 16);
      let bin4 = 0;
      let magicNum1 = bin3 * 16;
      let magicNum2 = bin3 * 16 + 16 - 1;  
      document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${bin2}.${magicNum1}.${bin4}`;
      document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${bin2}.${magicNum1}.${bin4 + 1}`;
      document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${bin2}.${magicNum2}.${bin4 + 254}`;
      document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${bin2}.${magicNum2}.${bin4 + 255}`;

    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 248 && sub3 < 249 && sub4 >= 0 && sub4 < 1) {
      let bin1 = oct1;
      let bin2 = oct2;
      let bin3 = Math.floor(oct3 / 8);
      let bin4 = 0;
      let magicNum1 = bin3 * 8;
      let magicNum2 = bin3 * 8 + 8 - 1;  
      document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${bin2}.${magicNum1}.${bin4}`;
      document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${bin2}.${magicNum1}.${bin4 + 1}`;
      document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${bin2}.${magicNum2}.${bin4 + 254}`;
      document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${bin2}.${magicNum2}.${bin4 + 255}`;

    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 252 && sub3 < 253 && sub4 >= 0 && sub4 < 1) {
      let bin1 = oct1;
      let bin2 = oct2;
      let bin3 = Math.floor(oct3 / 4);
      let bin4 = 0;
      let magicNum1 = bin3 * 4;
      let magicNum2 = bin3 * 4 + 4 - 1;  
      document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${bin2}.${magicNum1}.${bin4}`;
      document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${bin2}.${magicNum1}.${bin4 + 1}`;
      document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${bin2}.${magicNum2}.${bin4 + 254}`;
      document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${bin2}.${magicNum2}.${bin4 + 255}`;

    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 254 && sub3 < 255 && sub4 >= 0 && sub4 < 1) {
      let bin1 = oct1;
      let bin2 = oct2;
      let bin3 = Math.floor(oct3 / 2);
      let bin4 = 0;
      let magicNum1 = bin3 * 2;
      let magicNum2 = bin3 * 2 + 2 - 1;  
      document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${bin2}.${magicNum1}.${bin4}`;
      document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${bin2}.${magicNum1}.${bin4 + 1}`;
      document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${bin2}.${magicNum2}.${bin4 + 254}`;
      document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${bin2}.${magicNum2}.${bin4 + 255}`;

    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 255 && sub3 < 256 && sub4 >= 128 && sub4 < 129) {
      let bin1 = oct1;
      let bin2 = oct2;
      let bin3 = oct3;
      let bin4 = Math.floor(oct4 / 128);
      let magicNum1 = bin4 * 128;
      let magicNum2 = bin4 * 128 + 128 - 1;  
      document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${bin2}.${bin3}.${magicNum1}`;
      document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${bin2}.${bin3}.${magicNum1}`;
      document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${bin2}.${bin3}.${magicNum2 - 1}`;
      document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${bin2}.${bin3}.${magicNum2}`;

    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 255 && sub3 < 256 && sub4 >= 192 && sub4 < 193) {
      let bin1 = oct1;
      let bin2 = oct2;
      let bin3 = oct3;
      let bin4 = Math.floor(oct4 / 64);
      let magicNum1 = bin4 * 64;
      let magicNum2 = bin4 * 64 + 64 - 1;  
      document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${bin2}.${bin3}.${magicNum1}`;
      document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${bin2}.${bin3}.${magicNum1}`;
      document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${bin2}.${bin3}.${magicNum2 - 1}`;
      document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${bin2}.${bin3}.${magicNum2}`;

    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 255 && sub3 < 256 && sub4 >= 224 && sub4 < 225) {
      let bin1 = oct1;
      let bin2 = oct2;
      let bin3 = oct3;
      let bin4 = Math.floor(oct4 / 32);
      let magicNum1 = bin4 * 32;
      let magicNum2 = bin4 * 32 + 32 - 1;  
      document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${bin2}.${bin3}.${magicNum1}`;
      document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${bin2}.${bin3}.${magicNum1}`;
      document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${bin2}.${bin3}.${magicNum2 - 1}`;
      document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${bin2}.${bin3}.${magicNum2}`;

    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 255 && sub3 < 256 && sub4 >= 240 && sub4 < 241) {
      let bin1 = oct1;
      let bin2 = oct2;
      let bin3 = oct3;
      let bin4 = Math.floor(oct4 / 16);
      let magicNum1 = bin4 * 16;
      let magicNum2 = bin4 * 16 + 16 - 1;  
      document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${bin2}.${bin3}.${magicNum1}`;
      document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${bin2}.${bin3}.${magicNum1}`;
      document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${bin2}.${bin3}.${magicNum2 - 1}`;
      document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${bin2}.${bin3}.${magicNum2}`;

    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 255 && sub3 < 256 && sub4 >= 248 && sub4 < 249) {
      let bin1 = oct1;
      let bin2 = oct2;
      let bin3 = oct3;
      let bin4 = Math.floor(oct4 / 8);
      let magicNum1 = bin4 * 8;
      let magicNum2 = bin4 * 8 + 8 - 1;  
      document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${bin2}.${bin3}.${magicNum1}`;
      document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${bin2}.${bin3}.${magicNum1}`;
      document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${bin2}.${bin3}.${magicNum2 - 1}`;
      document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${bin2}.${bin3}.${magicNum2}`;

    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 255 && sub3 < 256 && sub4 >= 252 && sub4 < 253) {
      let bin1 = oct1;
      let bin2 = oct2;
      let bin3 = oct3;
      let bin4 = Math.floor(oct4 / 4);
      let magicNum1 = bin4 * 4;
      let magicNum2 = bin4 * 4 + 4 - 1;  
      document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${bin2}.${bin3}.${magicNum1}`;
      document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${bin2}.${bin3}.${magicNum1}`;
      document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${bin2}.${bin3}.${magicNum2 - 1}`;
      document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${bin2}.${bin3}.${magicNum2}`;

    } else if (sub1 >= 255 && sub1 < 256 && sub2 >= 255 && sub2 < 256 && sub3 >= 255 && sub3 < 256 && sub4 >= 254 && sub4 < 255) {
      let bin1 = oct1;
      let bin2 = oct2;
      let bin3 = oct3;
      let bin4 = Math.floor(oct4 / 2);
      let magicNum1 = bin4 * 2;
      let magicNum2 = bin4 * 2 + 2 - 1;  
      document.getElementById("result2").innerHTML = `Network Id👁‍🗨: ${bin1}.${bin2}.${bin3}.${magicNum1}`;
      document.getElementById("result2-1").innerHTML = `First Host🥇: ${bin1}.${bin2}.${bin3}.${magicNum1}`;
      document.getElementById("result2-2").innerHTML = `Last Host🥉: ${bin1}.${bin2}.${bin3}.${magicNum2 - 1}`;
      document.getElementById("result2-3").innerHTML = `Subnet Broadcast🔊: ${bin1}.${bin2}.${bin3}.${magicNum2}`;

    } else {
        document.getElementById("result2").innerHTML = "";
        document.getElementById("result2-1").innerHTML = "";
        document.getElementById("result2-2").innerHTML = "";
        document.getElementById("result2-3").innerHTML = "";
    }

  };
  
   const reset = () => {
    let oct1 = document.getElementById("oct1").value = 0;
    let oct2 = document.getElementById("oct2").value = 0;
    let oct3 = document.getElementById("oct3").value = 0;
    let oct4 = document.getElementById("oct4").value = 0;
    let sub1 = document.getElementById("sub1").value = 0;
    let sub2 = document.getElementById("sub2").value = 0;
    let sub3 = document.getElementById("sub3").value = 0;
    let sub4 = document.getElementById("sub4").value = 0;
    document.getElementById("result").innerHTML = "";
    document.getElementById("result2").innerHTML = "";
    document.getElementById("result1").innerHTML = "";
    document.getElementById("result3").innerHTML = "";
    document.getElementById("result4").innerHTML = "";
    document.getElementById("result2-1").innerHTML = "";
    document.getElementById("result2-2").innerHTML = "";
    document.getElementById("result2-3").innerHTML = "";
  };