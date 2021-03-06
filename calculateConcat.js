(function(){
function calculateConcat(countryCode, name, surname, dob) {
	var concatId = countryCode;
	 // Pull out the day, month and year of the DOB
	day = dob.substring(0, 2);
	month = dob.substring(3, 5);
	year = dob.substring(6);
	 // create expected format of YYYMMDD
	var birthdate = year + month + day;
	 concatId = concatId + birthdate;
	 // Remove any prefix from the first name
	name = name.replace(new RegExp("^" + " "), '');
	// Transliterate non lating characters to Latin characters
	var transName = transliterate(name);
	name = transName;
	// Remove any characters not upper or smaller case letters
	var cleanName = cleanupStr(name);
	name = cleanName;
	// If the name is greater than 5 characters than trim it
	if (name.length > 4) {
		var trimmedName = name.substring(0, 5);
		name = trimmedName;
	// otherwise if less than 5 tha
	} else {
		var paddedName = padEndStr(name, 5, '#');
		name = paddedName;
	}
	concatId = concatId + name.toUpperCase();
	 // Remove any prefix from the surname name
	surname = surname.replace(new RegExp("^" + " "), '');
	// Do a second time in case there's a 2 word prefix - ex Von Dem Hosen... We just want Hosen
	surname = surname.replace(new RegExp("^" + " "), '');
	var transSurname = transliterate(surname);
	surname = transSurname;
	// Remove any characters not upper or smaller case letters
	var cleanSurname = cleanupStr(surname);
	surname = cleanSurname;
	// If the surname is greater than 5 characters than trim it
	if (surname.length > 4) {
		var trimmedSurname = surname.substring(0, 5);
		surname = trimmedSurname;
	} else {
		var paddedSurname = padEndStr(surname, 5, '#');
		surname = paddedSurname;
	}
	concatId = concatId + surname.toUpperCase();
	 return concatId;
}
 function transliterate(text) {
	
		text = text
			.replace(/\u00C4/g, 'A')
			.replace(/\u00E4/g, 'A')
			.replace(/\u00C0/g, 'A')
			.replace(/\u00E0/g, 'A')
			.replace(/\u00C1/g, 'A')
			.replace(/\u00E1/g, 'A')
			.replace(/\u00C2/g, 'A')
			.replace(/\u00E2/g, 'A')
			.replace(/\u00C3/g, 'A')
			.replace(/\u00E3/g, 'A')
			.replace(/\u00C5/g, 'A')
			.replace(/\u00E5/g, 'A')
			.replace(/\u01CD/g, 'A')
			.replace(/\u01CE/g, 'A')
			.replace(/\u0104/g, 'A')
			.replace(/\u0105/g, 'A')
			.replace(/\u0102/g, 'A')
			.replace(/\u0103/g, 'A')
			.replace(/\u00C6/g, 'A')
			.replace(/\u00E6/g, 'A');
			 text = text
			.replace(/\u00C7/g, 'C')
			.replace(/\u00E7/g, 'C')
			.replace(/\u0106/g, 'C')
			.replace(/\u0107/g, 'C')
			.replace(/\u0108/g, 'C')
			.replace(/\u0109/g, 'C')
			.replace(/\u010C/g, 'C')
			.replace(/\u010D/g, 'C');
			 text = text
			.replace(/\u010E/g, 'D')
			.replace(/\u0111/g, 'D')
			.replace(/\u0110/g, 'D')
			.replace(/\u010F/g, 'D')
			.replace(/\u00F0/g, 'D');
			 text = text
			.replace(/\u00C8/g, 'E')
			.replace(/\u00E8/g, 'E')
			.replace(/\u00C9/g, 'E')
			.replace(/\u00E9/g, 'E')
			.replace(/\u00CA/g, 'E')
			.replace(/\u00EA/g, 'E')
			.replace(/\u00CB/g, 'E')
			.replace(/\u00EB/g, 'E')
			.replace(/\u011A/g, 'E')
			.replace(/\u011B/g, 'E')
			.replace(/\u0118/g, 'E')
			.replace(/\u0119/g, 'E');
			 text = text
			.replace(/\u011C/g, 'G')
			.replace(/\u011D/g, 'G')
			.replace(/\u0122/g, 'G')
			.replace(/\u0123/g, 'G')
			.replace(/\u011E/g, 'G')
			.replace(/\u011F/g, 'G');
			 text = text
			.replace(/\u0124/g, 'H')
			.replace(/\u0125/g, 'H');
			 text = text
			.replace(/\u00CC/g, 'I')
			.replace(/\u00EC/g, 'I')
			.replace(/\u00CD/g, 'I')
			.replace(/\u00ED/g, 'I')
			.replace(/\u00CE/g, 'I')
			.replace(/\u00EE/g, 'I')
			.replace(/\u00CF/g, 'I')
			.replace(/\u00EF/g, 'I')
			.replace(/\u0131/g, 'I');
			 text = text
			.replace(/\u0134/g, 'J')
			.replace(/\u0135/g, 'J');
			 text = text
			.replace(/\u0136/g, 'K')
			.replace(/\u0137/g, 'K');
			 text = text
			.replace(/\u0139/g, 'L')
			.replace(/\u013A/g, 'L')
			.replace(/\u013B/g, 'L')
			.replace(/\u013C/g, 'L')
			.replace(/\u0141/g, 'L')
			.replace(/\u0142/g, 'L')
			.replace(/\u013D/g, 'L')
			.replace(/\u013E/g, 'L');
			 text = text
			.replace(/\u00D1/g, 'N')
			.replace(/\u00F1/g, 'N')
			.replace(/\u0143/g, 'N')
			.replace(/\u0144/g, 'N')
			.replace(/\u0147/g, 'N')
			.replace(/\u0148/g, 'N');
			 text = text
			.replace(/\u00D6/g, 'O')
			.replace(/\u00F6/g, 'O')
			.replace(/\u00D2/g, 'O')
			.replace(/\u00F2/g, 'O')
			.replace(/\u00D3/g, 'O')
			.replace(/\u00F3/g, 'O')
			.replace(/\u00D4/g, 'O')
			.replace(/\u00F4/g, 'O')
			.replace(/\u00D5/g, 'O')
			.replace(/\u00F5/g, 'O')
			.replace(/\u0150/g, 'O')
			.replace(/\u0151/g, 'O')
			.replace(/\u00D8/g, 'O')
			.replace(/\u00F8/g, 'O')
			.replace(/\u0152/g, 'O')
			.replace(/\u0153/g, 'O');
			 text = text
			.replace(/\u0154/g, 'R')
			.replace(/\u0155/g, 'R')
			.replace(/\u0158/g, 'R')
			.replace(/\u0159/g, 'R');
			 text = text
			.replace(/\u1E9E/g, 'S')
			.replace(/\u00DF/g, 'S')
			.replace(/\u015A/g, 'S')
			.replace(/\u015B/g, 'S')
			.replace(/\u015C/g, 'S')
			.replace(/\u015D/g, 'S')
			.replace(/\u015E/g, 'S')
			.replace(/\u015F/g, 'S')
			.replace(/\u0160/g, 'S')
			.replace(/\u0161/g, 'S')
			.replace(/\u0218/g, 'S')
			.replace(/\u0219/g, 'S');
			 text = text
			.replace(/\u0164/g, 'T')
			.replace(/\u0165/g, 'T')
			.replace(/\u0162/g, 'T')
			.replace(/\u0163/g, 'T')
			.replace(/\u00DE/g, 'T')
			.replace(/\u00FE/g, 'T')
			.replace(/\u021A/g, 'T')
			.replace(/\u021B/g, 'T');
			 text = text
			.replace(/\u00DC/g, 'U')
			.replace(/\u00FC/g, 'U')
			.replace(/\u00D9/g, 'U')
			.replace(/\u00F9/g, 'U')
			.replace(/\u00DA/g, 'U')
			.replace(/\u00FA/g, 'U')
			.replace(/\u00DB/g, 'U')
			.replace(/\u00FB/g, 'U')
			.replace(/\u0170/g, 'U')
			.replace(/\u0171/g, 'U')
			.replace(/\u0168/g, 'U')
			.replace(/\u0169/g, 'U')
			.replace(/\u0172/g, 'U')
			.replace(/\u0173/g, 'U')
			.replace(/\u016E/g, 'U')
			.replace(/\u016F/g, 'U');
			 text = text
			.replace(/\u0174/g, 'W')
			.replace(/\u0175/g, 'W');
			 text = text
			.replace(/\u00DD/g, 'Y')
			.replace(/\u00FD/g, 'Y')
			.replace(/\u0178/g, 'Y')
			.replace(/\u00FF/g, 'Y')
			.replace(/\u0176/g, 'Y')
			.replace(/\u0177/g, 'Y');
			 text = text
			.replace(/\u0179/g, 'Z')
			.replace(/\u017A/g, 'Z')
			.replace(/\u017D/g, 'Z')
			.replace(/\u017E/g, 'Z')
			.replace(/\u017B/g, 'Z')
			.replace(/\u017C/g, 'Z');
	
		return text;
	};

function cleanupStr(str) {
	return str.toLowerCase().replace(/[^a-zA-Z]+/g, "");
}
 function padEndStr(str, targetLength, padString) {
	targetLength = targetLength>>0; //floor if number or convert non-number to 0;
	padString = String((typeof padString !== 'undefined' ? padString : ' '));
	if (str.length > targetLength) {
		return String(str);
	}
	else {
		targetLength = targetLength-str.length;
		if (targetLength > padString.length) {
			padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
		}
		 return String(str) + padString.slice(0,targetLength);
	}
}
})();