console.log("Script Loaded");




function Dress (dressNumber, dressAssetID, dressName, rarity, type, attribute, character, hp1, atk1, def1, agi1, hp60, atk60, def60, agi60, hp80, atk80, def80, agi80, fcs, res, rank, pictureAddress, isOnGlobal){
  this.dressNumber = dressNumber;
  this.dressAssetID = dressAssetID;
  this.dressName = dressName;
  this.rarity = rarity;
  this.type = type;
  this.attribute = attribute;
  this.character = character;
  this.hp1 = hp1;
  this.atk1 = atk1;
  this.def1 = def1;
  this.agi1 = agi1;
  this.hp60 = hp60;
  this.atk60 = atk60;
  this.def60 = def60;
  this.agi60 = agi60;
  this.hp80 = hp80;
  this.atk80 = atk80;
  this.def80 = def80;
  this.agi80 = agi80;
  this.fcs = fcs;
  this.res = res;
  this.rank = rank;
  this.pictureAddress = pictureAddress;
  this.isOnGlobal = isOnGlobal;
};


//const fruits = [
const dressID101001 = new Dress(1, 101001, "Lounge Wear Iroha", "N", "Attack", "Fire", "Iroha Asobe", 2080, 222, 187, 47, 5187, 555, 468, 83, 6240, 667, 562, 95, 40, 40, "TierSSS", "./Images/Dresses Icons/101001.png");
const dressID201001 = new Dress(2, 201001, "Sports Uniform Iroha", "R", "Tank", "Fire", "Iroha Asobe", 3620, 181, 181, 48, 9028, 453, 453, 84, 10860, 544, 544, 96, 60, 20, "TierSSS", "./Images/Dresses Icons/201001.png");
const dressID201002 = new Dress(3, 201002, "Cooking Apron Iroha", "R", "Attack", "Fire", "Iroha Asobe", 3070, 224, 174, 62, 7656, 561, 436, 98, 9210, 674, 524, 110, 60, 20, "TierSSS", "./Images/Dresses Icons/201002.png");
const dressID201003 = new Dress(4, 201003, "Casual Holiday Iroha", "R", "Assist", "Fire", "Iroha Asobe", 2960, 196, 210, 55, 7382, 489, 526, 91, 8880, 588, 632, 103, 40, 40, "TierSSS", "./Images/Dresses Icons/201003.png");
const dressID301001 = new Dress(5, 301001, "Magica Round 1 Iroha", "SR", "Tank", "Fire", "Iroha Asobe", 3730, 223, 186, 53, 9302, 558, 464, 89, 11190, 671, 558, 101, 60, 20, "TierSSS", "./Images/Dresses Icons/301001.png");
const dressID301002 = new Dress(6, 301002, "Magica 1984 Iroha", "SR", "Assist", "Fire", "Iroha Asobe", 3290, 219, 219, 68, 8205, 548, 547, 104, 9870, 659, 658, 116, 40, 40, "TierSSS", "./Images/Dresses Icons/301002.png");
const dressID301003 = new Dress(7, 301003, "Magica 2061 Iroha", "SR", "Guard", "Fire", "Iroha Asobe", 3235, 211, 231, 46, 8068, 527, 577, 82, 9705, 634, 694, 94, 40, 40, "TierSSS", "./Images/Dresses Icons/301003.png");
const dressID401001 = new Dress(8, 401001, "Magica Round 1 Evo Iroha", "UR", "Tank", "Fire", "Iroha Asobe", 4115, 237, 202, 51, 10262, 592, 504, 87, 12345, 712, 606, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/401001.png");
const dressID401002 = new Dress(9, 401002, "Arachne Demon's Style Iroha", "UR", "Guard", "Water", "Iroha Asobe", 3730, 201, 264, 63, 9302, 502, 659, 99, 11190, 603, 792, 111, 40, 40, "TierSSS", "./Images/Dresses Icons/401002.png");
const dressID401003 = new Dress(10, 401003, "Kawaii Warrior Iroha", "UR", "Assist", "Fire", "Iroha Asobe", 3840, 225, 232, 56, 9576, 562, 581, 92, 11520, 675, 698, 104, 40, 40, "TierSSS", "./Images/Dresses Icons/401003.png");
const dressID301004 = new Dress(11, 301004, "Sailor Swimsuit Iroha", "SR", "Assist", "Light", "Iroha Asobe", 3565, 217, 203, 51, 8890, 543, 507, 87, 10695, 653, 609, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/301004.png");
const dressID401004 = new Dress(12, 401004, "Adorable Bikini Iroha", "UR", "Assist", "Lightning", "Iroha Asobe", 3675, 233, 235, 66, 9165, 583, 587, 102, 11025, 701, 705, 114, 40, 40, "TierSSS", "./Images/Dresses Icons/401004.png");
const dressID301005 = new Dress(13, 301005, "Fluffy Rabbit Iroha", "SR", "Attack", "Water", "Iroha Asobe", 3565, 250, 170, 63, 8890, 625, 424, 99, 10695, 752, 510, 111, 40, 40, "TierSSS", "./Images/Dresses Icons/301005.png");
const dressID301006 = new Dress(14, 301006, "Hallowitch Iroha", "SR", "Attack", "Fire", "Iroha Asobe", 3180, 253, 192, 53, 7930, 633, 481, 89, 9540, 761, 578, 101, 40, 40, "TierSSS", "./Images/Dresses Icons/301006.png");
const dressID301007 = new Dress(15, 301007, "Kellnerin Maiden Iroha", "SR", "Attack", "Water", "Iroha Asobe", 3235, 247, 195, 50, 8068, 617, 488, 86, 9705, 742, 586, 98, 40, 40, "TierSSS", "./Images/Dresses Icons/301007.png");
const dressID401005 = new Dress(16, 401005, "Holy Santa Iroha", "UR", "Tank", "Light", "Iroha Asobe", 4060, 210, 232, 78, 10125, 525, 581, 114, 12180, 631, 698, 126, 40, 40, "TierSSS", "./Images/Dresses Icons/401005.png");
const dressID301008 = new Dress(17, 301008, "Snow Queen Iroha", "SR", "Attack", "Fire", "Iroha Asobe", 3510, 234, 189, 51, 8753, 586, 473, 87, 10530, 704, 569, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/301008.png");
const dressID401006 = new Dress(18, 401006, "Riot Police Iroha", "UR", "Guard", "Dark", "Iroha Asobe", 3840, 196, 261, 51, 9576, 490, 652, 87, 11520, 589, 784, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/401006.png");
const dressID301010 = new Dress(19, 301010, "Magical Wedding Iroha", "SR", "Guard", "Lightning", "Iroha Asobe", 3400, 187, 244, 62, 8479, 468, 610, 98, 10200, 562, 733, 110, 40, 40, "TierSSS", "./Images/Dresses Icons/301010.png");
const dressID401007 = new Dress(20, 401007, "Ultimate Magica Iroha", "UR", "Attack", "Fire", "Iroha Asobe", 3620, 277, 194, 55, 9028, 693, 486, 91, 10860, 833, 584, 103, 40, 40, "TierSSS", "./Images/Dresses Icons/401007.png");
const dressID301011 = new Dress(21, 301011, "Leviathan Iroha", "SR", "Guard", "Dark", "Iroha Asobe", 3345, 183, 251, 53, 8342, 458, 628, 89, 10035, 551, 755, 101, 40, 40, "TierSSS", "./Images/Dresses Icons/301011.png");
const dressID301009 = new Dress(22, 301009, "Leukosia Demon's Style Iroha", "SR", "Assist", "Light", "Iroha Asobe", 3400, 223, 208, 62, 8479, 558, 519, 98, 10200, 671, 624, 110, 40, 40, "TierSSS", "./Images/Dresses Icons/301009.png");
const dressID401008 = new Dress(23, 401008, "Nakano Yotsuba Iroha", "UR", "Guard", "Lightning", "Iroha Asobe", 3675, 212, 256, 62, 9165, 531, 639, 98, 11025, 638, 768, 110, 40, 40, "TierSSS", "./Images/Dresses Icons/401008.png");
const dressID301012 = new Dress(24, 301012, "Authentic Bunny Iroha", "SR", "Assist", "Dark", "Iroha Asobe", 3675, 204, 209, 60, 9165, 509, 522, 96, 11025, 612, 628, 108, 40, 40, "TierSSS", "./Images/Dresses Icons/301012.png");
const dressID401009 = new Dress(25, 401009, "Stray Cat Iroha", "UR", "Attack", "Lightning", "Iroha Asobe", 3620, 271, 201, 66, 9028, 676, 502, 102, 10860, 813, 604, 114, 60, 20, "TierSSS", "./Images/Dresses Icons/401009.png");
const dressID301013 = new Dress(26, 301013, "Demon's Suit Enbi Iroha", "SR", "Attack", "Light", "Iroha Asobe", 3920, 260, 178, 51, 8205, 650, 446, 87, 9870, 781, 536, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/301013.png");
const dressID102001 = new Dress(27, 102001, "Lounge Wear Kaori", "N", "Assist", "Water", "Kaori Tomonaga", 2355, 194, 197, 48, 5873, 485, 492, 84, 7065, 583, 591, 96, 40, 40, "TierSSS", "./Images/Dresses Icons/102001.png");
const dressID202001 = new Dress(28, 202001, "Sports Uniform Kaori", "R", "Assist", "Water", "Kaori Tomonaga", 3070, 190, 208, 55, 7656, 476, 521, 91, 9210, 572, 626, 103, 40, 40, "TierSSS", "./Images/Dresses Icons/202001.png");
const dressID202002 = new Dress(29, 202002, "Cooking Apron Kaori", "R", "Assist", "Water", "Kaori Tomonaga", 3290, 202, 182, 51, 8205, 506, 454, 87, 9870, 608, 546, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/202002.png");
const dressID202003 = new Dress(30, 202003, "Casual Holiday Kaori", "R", "Guard", "Water", "Kaori Tomonaga", 3345, 177, 203, 51, 8342, 443, 507, 87, 10035, 533, 610, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/202003.png");
const dressID302001 = new Dress(31, 302001, "Magica Round 1 Kaori", "SR", "Assist", "Water", "Kaori Tomonaga", 3510, 208, 216, 54, 8753, 519, 540, 90, 10530, 624, 649, 102, 40, 40, "TierSSS", "./Images/Dresses Icons/302001.png");
const dressID302002 = new Dress(32, 302002, "Magica 1984 Kaori", "SR", "Tank", "Water", "Kaori Tomonaga", 4225, 185, 191, 60, 10536, 463, 477, 96, 12675, 557, 573, 108, 40, 40, "TierSSS", "./Images/Dresses Icons/302002.png");
const dressID302003 = new Dress(33, 302003, "Magica 2061 Kaori", "SR", "Assist", "Water", "Kaori Tomonaga", 4115, 155, 229, 44, 10262, 387, 572, 80, 12345, 465, 687, 92, 20, 60, "TierSSS", "./Images/Dresses Icons/302003.png");
const dressID302004 = new Dress(34, 302004, "Arachne Demon's Style Kaori", "SR", "Assist", "Fire", "Kaori Tomonaga", 3400, 221, 210, 59, 8479, 552, 525, 95, 10200, 664, 631, 107, 40, 40, "TierSSS", "./Images/Dresses Icons/302004.png");
const dressID402001 = new Dress(35, 402001, "Magica Round 1 Evo Kaori", "UR", "Assist", "Water", "Kaori Tomonaga", 3785, 226, 234, 60, 9439, 566, 586, 96, 11355, 680, 704, 108, 60, 20, "TierSSS", "./Images/Dresses Icons/402001.png");
const dressID302005 = new Dress(36, 302005, "Kawaii Warrior Kaori", "SR", "Attack", "Water", "Kaori Tomonaga", 2960, 252, 208, 48, 7382, 630, 520, 84, 8880, 758, 625, 96, 40, 40, "TierSSS", "./Images/Dresses Icons/302005.png");
const dressID402002 = new Dress(37, 402002, "Sailor Swimsuit Kaori", "UR", "Guard", "Water", "Kaori Tomonaga", 3455, 219, 263, 51, 8616, 548, 658, 87, 10365, 659, 791, 99, 20, 60, "TierSSS", "./Images/Dresses Icons/402002.png");
const dressID302006 = new Dress(38, 302006, "Adorable Bikini Kaori", "SR", "Guard", "Fire", "Kaori Tomonaga", 3400, 201, 230, 51, 8479, 502, 575, 87, 10200, 604, 691, 99, 60, 20, "TierSSS", "./Images/Dresses Icons/302006.png");
const dressID302007 = new Dress(39, 302007, "Fluffy Rabbit Kaori", "SR", "Attack", "Light", "Kaori Tomonaga", 3345, 273, 161, 57, 8342, 683, 403, 93, 10035, 821, 485, 105, 40, 40, "TierSSS", "./Images/Dresses Icons/302007.png");
const dressID302008 = new Dress(40, 302008, "Passionate Cheerleader Kaori", "SR", "Assist", "Lightning", "Kaori Tomonaga", 3455, 204, 223, 58, 8616, 510, 558, 94, 10365, 613, 671, 106, 40, 40, "TierSSS", "./Images/Dresses Icons/302008.png");
const dressID402003 = new Dress(41, 402003, "Hallowitch Kaori", "UR", "Assist", "Lightning", "Kaori Tomonaga", 3730, 235, 229, 56, 9302, 587, 573, 92, 11190, 706, 689, 104, 40, 40, "TierSSS", "./Images/Dresses Icons/402003.png");
const dressID302009 = new Dress(42, 302009, "Ancient Sage Kaori", "SR", "Assist", "Dark", "Kaori Tomonaga", 3620, 214, 203, 56, 9028, 534, 507, 92, 10860, 642, 609, 104, 40, 40, "TierSSS", "./Images/Dresses Icons/302009.png");
const dressID302010 = new Dress(43, 302010, "Ruffian Princess Kaori", "SR", "Attack", "Light", "Kaori Tomonaga", 3840, 242, 159, 48, 9576, 605, 398, 84, 11520, 728, 479, 96, 40, 40, "TierSSS", "./Images/Dresses Icons/302010.png");
const dressID402004 = new Dress(44, 402004, "Kellnerin Maiden Kaori", "UR", "Assist", "Light", "Kaori Tomonaga", 3510, 235, 244, 53, 8753, 587, 610, 89, 10530, 705, 734, 101, 40, 40, "TierSSS", "./Images/Dresses Icons/402004.png");
const dressID302011 = new Dress(45, 302011, "Riot Police Kaori", "SR", "Tank", "Light", "Kaori Tomonaga", 4005, 191, 200, 53, 9988, 478, 499, 89, 12015, 574, 600, 101, 40, 40, "TierSSS", "./Images/Dresses Icons/302011.png");
const dressID402005 = new Dress(46, 402005, "Magical Wedding Kaori", "UR", "Guard", "Light", "Kaori Tomonaga", 3730, 203, 261, 52, 9302, 507, 653, 88, 11190, 610, 785, 100, 20, 60, "TierSSS", "./Images/Dresses Icons/402005.png");
const dressID402006 = new Dress(47, 402006, "Isekai Layers Kaori", "UR", "Attack", "Fire", "Kaori Tomonaga", 3895, 264, 189, 54, 9713, 660, 473, 90, 11685, 793, 569, 102, 40, 40, "TierSSS", "./Images/Dresses Icons/402006.png");
const dressID402007 = new Dress(48, 402007, "Uesugi Raiha Kaori", "UR", "Assist", "Water", "Kaori Tomonaga", 3785, 234, 227, 58, 9439, 584, 567, 94, 11355, 702, 682, 106, 40, 40, "TierSSS", "./Images/Dresses Icons/402007.png");
const dressID402008 = new Dress(49, 402008, "Shinsengumi Law Bureau Kaori", "UR", "Attack", "Lightning", "Kaori Tomonaga", 3840, 267, 190, 60, 9576, 666, 476, 96, 11520, 801, 572, 108, 40, 40, "TierSSS", "./Images/Dresses Icons/402008.png");
const dressID103001 = new Dress(50, 103001, "Lounge Wear Seira", "N", "Guard", "Dark", "Seira Sodeshiro", 2300, 177, 217, 59, 5736, 443, 543, 95, 6900, 532, 653, 107, 40, 40, "TierSSS", "./Images/Dresses Icons/103001.png");
const dressID203001 = new Dress(51, 203001, "Sports Uniform Seira", "R", "Assist", "Dark", "Seira Sodeshiro", 3015, 202, 201, 47, 7519, 504, 502, 83, 9045, 606, 603, 95, 40, 40, "TierSSS", "./Images/Dresses Icons/203001.png");
const dressID203002 = new Dress(52, 203002, "Cooking Apron Seira", "R", "Assist", "Dark", "Seira Sodeshiro", 3235, 194, 194, 56, 8068, 485, 484, 92, 9705, 583, 582, 104, 40, 40, "TierSSS", "./Images/Dresses Icons/203002.png");
const dressID203003 = new Dress(53, 203003, "Casual Holiday Seira", "R", "Attack", "Dark", "Seira Sodeshiro", 3180, 211, 180, 60, 7930, 527, 451, 96, 9540, 634, 542, 108, 40, 40, "TierSSS", "./Images/Dresses Icons/203003.png");
const dressID303001 = new Dress(54, 303001, "Magica Round 1 Seira", "SR", "Guard", "Dark", "Seira Sodeshiro", 3345, 177, 258, 58, 8342, 443, 644, 94, 10035, 532, 774, 106, 40, 40, "TierSSS", "./Images/Dresses Icons/303001.png");
const dressID303002 = new Dress(55, 303002, "Magica 1984 Seira", "SR", "Assist", "Dark", "Seira Sodeshiro", 3400, 207, 224, 61, 8479, 517, 561, 97, 10200, 621, 674, 109, 40, 40, "TierSSS", "./Images/Dresses Icons/303002.png");
const dressID303003 = new Dress(56, 303003, "Magica 2061 Seira", "SR", "Attack", "Dark", "Seira Sodeshiro", 3620, 257, 159, 51, 9028, 642, 398, 87, 10860, 772, 479, 99, 60, 20, "TierSSS", "./Images/Dresses Icons/303003.png");
const dressID403001 = new Dress(57, 403001, "Magica Round 1 Evo Seira", "UR", "Attack", "Dark", "Seira Sodeshiro", 3620, 261, 211, 57, 9028, 651, 527, 93, 10860, 783, 634, 105, 40, 40, "TierSSS", "./Images/Dresses Icons/403001.png");
const dressID403002 = new Dress(58, 403002, "Arachne Demon's Style Seira", "UR", "Attack", "Fire", "Seira Sodeshiro", 4005, 274, 172, 61, 9988, 685, 430, 97, 12015, 823, 517, 109, 40, 40, "TierSSS", "./Images/Dresses Icons/403002.png");
const dressID303004 = new Dress(59, 303004, "Kawaii Warrior Seira", "SR", "Tank", "Dark", "Seira Sodeshiro", 4060, 186, 201, 65, 10125, 466, 502, 101, 12180, 560, 603, 113, 40, 40, "TierSSS", "./Images/Dresses Icons/303004.png");
const dressID303005 = new Dress(60, 303005, "Holiday Bikini Round 1 Seira", "SR", "Attack", "Water", "Seira Sodeshiro", 3510, 247, 176, 59, 8753, 618, 441, 95, 10530, 743, 530, 107, 40, 40, "TierSSS", "./Images/Dresses Icons/303005.png");
const dressID303006 = new Dress(61, 303006, "Party Girl Seira", "SR", "Assist", "Light", "Seira Sodeshiro", 3675, 205, 207, 63, 9165, 513, 518, 99, 11025, 617, 623, 111, 40, 40, "TierSSS", "./Images/Dresses Icons/303006.png");
const dressID403003 = new Dress(62, 403003, "Fluffy Rabbit Seira", "UR", "Guard", "Fire", "Seira Sodeshiro", 3675, 203, 265, 57, 9165, 507, 662, 93, 11025, 610, 796, 105, 40, 40, "TierSSS", "./Images/Dresses Icons/403003.png");
const dressID303007 = new Dress(63, 303007, "Passionate Cheerleader Seira", "SR", "Tank", "Light", "Seira Sodeshiro", 3840, 198, 204, 61, 9576, 494, 510, 97, 11520, 594, 613, 109, 40, 40, "TierSSS", "./Images/Dresses Icons/303007.png");
const dressID403004 = new Dress(64, 403004, "Brunhild Warrior Seira", "UR", "Attack", "Light", "Seira Sodeshiro", 3620, 276, 196, 57, 9028, 689, 489, 93, 10860, 829, 588, 105, 40, 40, "TierSSS", "./Images/Dresses Icons/403004.png");
const dressID303008 = new Dress(65, 303008, "Sadistic Succubus Seira", "SR", "Attack", "Dark", "Seira Sodeshiro", 3345, 258, 177, 56, 8342, 644, 443, 92, 10035, 774, 532, 104, 60, 20, "TierSSS", "./Images/Dresses Icons/303008.png");
const dressID403005 = new Dress(66, 403005, "Sexy Reindeer Seira", "UR", "Guard", "Water", "Seira Sodeshiro", 3620, 207, 264, 55, 9028, 518, 660, 91, 10860, 623, 794, 103, 40, 40, "TierSSS", "./Images/Dresses Icons/403005.png");
const dressID303009 = new Dress(67, 303009, "New Year Maiden 2020 Seira", "SR", "Assist", "Water", "Seira Sodeshiro", 3510, 221, 202, 61, 8753, 553, 506, 97, 10530, 665, 608, 109, 40, 40, "TierSSS", "./Images/Dresses Icons/303009.png");
const dressID403006 = new Dress(68, 403006, "Man-Eating Demon Seira", "UR", "Tank", "Light", "Seira Sodeshiro", 4225, 232, 199, 54, 10536, 580, 498, 90, 12675, 697, 599, 102, 40, 40, "TierSSS", "./Images/Dresses Icons/403006.png");
const dressID403007 = new Dress(69, 403007, "Leukosia Demon's Style Seira", "UR", "Assist", "Lightning", "Seira Sodeshiro", 3785, 243, 218, 51, 9439, 607, 544, 87, 11355, 730, 654, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/403007.png");
const dressID403008 = new Dress(70, 403008, "Anubis Seira", "UR", "Assist", "Lightning", "Seira Sodeshiro", 3895, 226, 228, 53, 9713, 564, 569, 89, 11685, 678, 684, 101, 40, 40, "TierSSS", "./Images/Dresses Icons/403008.png");
const dressID403009 = new Dress(71, 403009, "Nakano Itsuki Seira", "UR", "Attack", "Fire", "Seira Sodeshiro", 3345, 290, 200, 49, 8342, 724, 500, 85, 10035, 871, 601, 97, 40, 40, "TierSSS", "./Images/Dresses Icons/403009.png");
const dressID104001 = new Dress(72, 104001, "Lounge Wear Cocoa", "N", "Tank", "Light", "Cocoa Yuwase", 2575, 180, 196, 51, 6422, 450, 490, 87, 7725, 541, 589, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/104001.png");
const dressID204001 = new Dress(73, 204001, "Sports Uniform Cocoa", "R", "Attack", "Light", "Cocoa Yuwase", 3070, 212, 187, 51, 7656, 530, 467, 87, 9210, 637, 561, 99, 60, 20, "TierSSS", "./Images/Dresses Icons/204001.png");
const dressID204002 = new Dress(74, 204002, "Cooking Apron Cocoa", "R", "Guard", "Light", "Cocoa Yuwase", 3290, 167, 217, 53, 8205, 418, 542, 89, 9870, 502, 652, 101, 20, 60, "TierSSS", "./Images/Dresses Icons/204002.png");
const dressID204003 = new Dress(75, 204003, "Casual Holiday Cocoa", "R", "Tank", "Light", "Cocoa Yuwase", 3675, 181, 177, 61, 9165, 453, 443, 97, 11025, 545, 532, 109, 40, 40, "TierSSS", "./Images/Dresses Icons/204003.png");
const dressID304001 = new Dress(76, 304001, "Magica Round 1 Cocoa", "SR", "Assist", "Light", "Cocoa Yuwase", 3620, 201, 216, 60, 9028, 502, 539, 96, 10860, 603, 648, 108, 40, 40, "TierSSS", "./Images/Dresses Icons/304001.png");
const dressID304002 = new Dress(77, 304002, "Magica 1984 Cocoa", "SR", "Attack", "Light", "Cocoa Yuwase", 3345, 274, 161, 42, 8342, 685, 402, 78, 10035, 823, 483, 90, 40, 40, "TierSSS", "./Images/Dresses Icons/304002.png");
const dressID304003 = new Dress(78, 304003, "Magica 2061 Cocoa", "SR", "Assist", "Light", "Cocoa Yuwase", 3290, 218, 220, 64, 8205, 546, 550, 100, 9870, 656, 661, 112, 40, 40, "TierSSS", "./Images/Dresses Icons/304003.png");
const dressID404001 = new Dress(79, 404001, "Magica Round 1 Evo Cocoa", "UR", "Tank", "Light", "Cocoa Yuwase", 4170, 213, 222, 64, 10399, 532, 556, 100, 12510, 639, 668, 112, 40, 40, "TierSSS", "./Images/Dresses Icons/404001.png");
const dressID304004 = new Dress(80, 304004, "Sailor Swimsuit Cocoa", "SR", "Attack", "Lightning", "Cocoa Yuwase", 3565, 260, 160, 51, 8890, 650, 399, 87, 10695, 782, 480, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/304004.png");
const dressID304005 = new Dress(81, 304005, "Hot Player Cocoa", "SR", "Tank", "Water", "Cocoa Yuwase", 3840, 218, 184, 52, 9576, 544, 460, 88, 11520, 654, 553, 100, 40, 40, "TierSSS", "./Images/Dresses Icons/304005.png");
const dressID204004 = new Dress(82, 204004, "Toranoana Apron Cocoa", "R", "Assist", "Fire", "Cocoa Yuwase", 3235, 195, 192, 56, 8068, 488, 481, 92, 9705, 587, 578, 104, 40, 40, "TierSSS", "./Images/Dresses Icons/204004.png");
const dressID404002 = new Dress(83, 404002, "Fiery Shrine Girl Cocoa", "UR", "Tank", "Dark", "Cocoa Yuwase", 4225, 224, 207, 55, 10536, 561, 517, 91, 12675, 674, 622, 103, 60, 20, "TierSSS", "./Images/Dresses Icons/404002.png");
const dressID404003 = new Dress(84, 404003, "Hallowitch Cocoa", "UR", "Assist", "Water", "Cocoa Yuwase", 3950, 211, 239, 65, 9850, 527, 596, 101, 11850, 634, 717, 113, 40, 40, "TierSSS", "./Images/Dresses Icons/404003.png");
const dressID304006 = new Dress(85, 304006, "Onsen Nymph Cocoa", "SR", "Guard", "Dark", "Cocoa Yuwase", 3345, 192, 242, 50, 8342, 481, 605, 86, 10035, 578, 728, 98, 40, 40, "TierSSS", "./Images/Dresses Icons/304006.png");
const dressID304007 = new Dress(86, 304007, "Holy Santa Cocoa", "SR", "Attack", "Fire", "Cocoa Yuwase", 3345, 264, 171, 51, 8342, 660, 427, 87, 10035, 793, 513, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/304007.png");
const dressID404004 = new Dress(87, 404004, "Tamamo-no-mae Cocoa", "UR", "Attack", "Lightning", "Cocoa Yuwase", 3565, 275, 200, 52, 8890, 688, 500, 88, 10695, 827, 601, 100, 40, 40, "TierSSS", "./Images/Dresses Icons/404004.png");
const dressID404005 = new Dress(88, 404005, "Man-Eating Demon Cocoa", "UR", "Attack", "Dark", "Cocoa Yuwase", 3675, 256, 212, 51, 9165, 639, 531, 87, 11025, 768, 638, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/404005.png");
const dressID304008 = new Dress(89, 304008, "Leukosia Demon's Style Cocoa", "SR", "Attack", "Fire", "Cocoa Yuwase", 3290, 270, 168, 60, 8205, 675, 421, 96, 9870, 811, 506, 108, 60, 20, "TierSSS", "./Images/Dresses Icons/304008.png");
const dressID304009 = new Dress(90, 304009, "Stray Cat Cocoa", "SR", "Guard", "Fire", "Cocoa Yuwase", 3510, 190, 234, 59, 8753, 474, 585, 95, 10530, 570, 703, 107, 40, 40, "TierSSS", "./Images/Dresses Icons/304009.png");
const dressID404006 = new Dress(91, 404006, "Ifrit Cocoa", "UR", "Attack", "Fire", "Cocoa Yuwase", 3455, 270, 212, 53, 8616, 675, 531, 89, 10365, 812, 638, 101, 40, 40, "TierSSS", "./Images/Dresses Icons/404006.png");
const dressID404007 = new Dress(92, 404007, "Magical Swimsuit Cocoa", "UR", "Assist", "Water", "Cocoa Yuwase", 3950, 236, 214, 59, 9850, 589, 535, 95, 11850, 708, 643, 107, 40, 40, "TierSSS", "./Images/Dresses Icons/404007.png");
const dressID304010 = new Dress(93, 304010, "Shinsengumi Law Bureau Cocoa", "SR", "Assist", "Fire", "Cocoa Yuwase", 3730, 214, 195, 59, 9302, 535, 488, 95, 11190, 643, 586, 107, 60, 20, "TierSSS", "./Images/Dresses Icons/304010.png");
const dressID305001 = new Dress(94, 305001, "Magica Round 1 Akisa", "SR", "Assist", "Dark", "Akisa Higashiyama", 3400, 229, 202, 55, 8479, 573, 504, 91, 10200, 689, 606, 103, 40, 40, "TierSSS", "./Images/Dresses Icons/305001.png");
const dressID405001 = new Dress(95, 405001, "Magica Round 1 Evo Akisa", "UR", "Assist", "Dark", "Akisa Higashiyama", 3730, 220, 244, 54, 9302, 550, 610, 90, 11190, 661, 734, 102, 40, 40, "TierSSS", "./Images/Dresses Icons/405001.png");
const dressID305002 = new Dress(96, 305002, "Magica 1984 Akisa", "SR", "Guard", "Dark", "Akisa Higashiyama", 3015, 216, 241, 51, 7519, 540, 601, 87, 9045, 649, 723, 99, 60, 20, "TierSSS", "./Images/Dresses Icons/305002.png");
const dressID405002 = new Dress(97, 405002, "Arachne Demon's Style Akisa", "UR", "Tank", "Light", "Akisa Higashiyama", 4390, 200, 220, 65, 10948, 501, 550, 101, 13170, 602, 661, 113, 40, 40, "TierSSS", "./Images/Dresses Icons/405002.png");
const dressID405003 = new Dress(98, 405003, "Fluffy Rabbit Akisa", "UR", "Guard", "Lightning", "Akisa Higashiyama", 3455, 207, 276, 51, 8616, 517, 689, 87, 10365, 621, 829, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/405003.png");
const dressID105001 = new Dress(99, 105001, "Lounge Wear Akisa", "N", "Assist", "Dark", "Akisa Higashiyama", 2410, 190, 197, 53, 6010, 476, 492, 89, 7230, 572, 591, 101, 40, 40, "TierSSS", "./Images/Dresses Icons/105001.png");
const dressID405004 = new Dress(100, 405004, "Real Maid Akisa", "UR", "Assist", "Light", "Akisa Higashiyama", 3840, 223, 234, 53, 9576, 557, 586, 89, 11520, 669, 704, 101, 40, 40, "TierSSS", "./Images/Dresses Icons/405004.png");
const dressID305003 = new Dress(101, 305003, "Magica 2061 Akisa", "SR", "Tank", "Dark", "Akisa Higashiyama", 4060, 200, 187, 56, 10125, 500, 468, 92, 12180, 601, 562, 104, 40, 40, "TierSSS", "./Images/Dresses Icons/305003.png");
const dressID405005 = new Dress(102, 405005, "Shibuya Halloween Akisa", "UR", "Attack", "Fire", "Akisa Higashiyama", 3620, 264, 207, 52, 9028, 660, 518, 88, 10860, 794, 623, 100, 40, 40, "TierSSS", "./Images/Dresses Icons/405005.png");
const dressID405006 = new Dress(103, 405006, "New Year Maiden 2020 Akisa", "UR", "Attack", "Lightning", "Akisa Higashiyama", 3455, 266, 217, 62, 8616, 665, 542, 98, 10365, 799, 651, 110, 40, 40, "TierSSS", "./Images/Dresses Icons/405006.png");
const dressID405007 = new Dress(104, 405007, "Leukosia Demon's Style Akisa", "UR", "Attack", "Fire", "Akisa Higashiyama", 3455, 264, 219, 54, 8616, 659, 547, 90, 10365, 792, 658, 102, 40, 40, "TierSSS", "./Images/Dresses Icons/405007.png");
const dressID305004 = new Dress(105, 305004, "Toranoana Apron Akisa", "SR", "Attack", "Light", "Akisa Higashiyama", 3290, 254, 184, 65, 8205, 635, 460, 101, 9870, 764, 553, 113, 40, 40, "TierSSS", "./Images/Dresses Icons/305004.png");
const dressID205001 = new Dress(106, 205001, "Casual Holiday Akisa", "R", "Guard", "Dark", "Akisa Higashiyama", 2905, 187, 223, 55, 7245, 468, 557, 91, 8715, 562, 669, 103, 60, 20, "TierSSS", "./Images/Dresses Icons/205001.png");
const dressID405008 = new Dress(107, 405008, "Mayuri Shiina Akisa", "UR", "Assist", "Light", "Akisa Higashiyama", 4060, 209, 233, 55, 10125, 522, 583, 91, 12180, 628, 701, 103, 40, 40, "TierSSS", "./Images/Dresses Icons/405008.png");
const dressID305005 = new Dress(108, 305005, "Fiery Shrine Girl Akisa", "SR", "Guard", "Lightning", "Akisa Higashiyama", 3510, 190, 234, 54, 8753, 474, 585, 90, 10530, 570, 703, 102, 40, 40, "TierSSS", "./Images/Dresses Icons/305005.png");
const dressID305006 = new Dress(109, 305006, "Hallowitch Akisa", "SR", "Assist", "Dark", "Akisa Higashiyama", 3785, 206, 199, 49, 9439, 516, 497, 85, 11355, 620, 598, 97, 20, 60, "TierSSS", "./Images/Dresses Icons/305006.png");
const dressID305007 = new Dress(110, 305007, "Onsen Nymph Akisa", "SR", "Tank", "Light", "Akisa Higashiyama", 3895, 196, 202, 56, 9713, 490, 505, 92, 11685, 589, 607, 104, 40, 40, "TierSSS", "./Images/Dresses Icons/305007.png");
const dressID305008 = new Dress(111, 305008, "Holy Santa Akisa", "SR", "Attack", "Water", "Akisa Higashiyama", 3180, 265, 181, 54, 7930, 662, 452, 90, 9540, 796, 543, 102, 40, 40, "TierSSS", "./Images/Dresses Icons/305008.png");
const dressID205002 = new Dress(112, 205002, "Cooking Apron Akisa", "R", "Assist", "Dark", "Akisa Higashiyama", 2795, 233, 184, 59, 6970, 582, 460, 95, 8385, 700, 553, 107, 60, 20, "TierSSS", "./Images/Dresses Icons/205002.png");
const dressID205003 = new Dress(113, 205003, "Sports Uniform Akisa", "R", "Guard", "Dark", "Akisa Higashiyama", 3180, 181, 211, 62, 7930, 452, 527, 98, 9540, 543, 633, 110, 40, 40, "TierSSS", "./Images/Dresses Icons/205003.png");
const dressID405009 = new Dress(114, 405009, "Bahamut Akisa", "UR", "Tank", "Dark", "Akisa Higashiyama", 4280, 227, 200, 51, 10673, 568, 501, 87, 12840, 683, 602, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/405009.png");
const dressID305009 = new Dress(115, 305009, "Crow Tengu Akisa", "SR", "Attack", "Water", "Akisa Higashiyama", 2960, 286, 174, 64, 7382, 714, 436, 100, 8880, 859, 524, 112, 40, 40, "TierSSS", "./Images/Dresses Icons/305009.png");
const dressID405010 = new Dress(116, 405010, "Magica Round 2 Evo Akisa", "UR", "Assist", "Dark", "Akisa Higashiyama", 3895, 211, 243, 71, 9713, 527, 606, 107, 11685, 633, 729, 119, 20, 60, "TierSSS", "./Images/Dresses Icons/405010.png");
const dressID305010 = new Dress(117, 305010, "Magica Round 2 Akisa", "SR", "Assist", "Dark", "Akisa Higashiyama", 3730, 200, 209, 56, 9302, 501, 522, 92, 11190, 602, 627, 104, 40, 40, "TierSSS", "./Images/Dresses Icons/305010.png");
const dressID405011 = new Dress(118, 405011, "Ennui Bikini Akisa", "UR", "Guard", "Water", "Akisa Higashiyama", 3730, 197, 268, 54, 9302, 492, 669, 90, 11190, 591, 804, 102, 40, 40, "TierSSS", "./Images/Dresses Icons/405011.png");
const dressID306001 = new Dress(119, 306001, "Magica Round 1 Ao", "SR", "Attack", "Water", "Ao Ohtori", 3125, 262, 188, 50, 7793, 654, 469, 86, 9375, 786, 564, 98, 60, 20, "TierSSS", "./Images/Dresses Icons/306001.png");
const dressID206001 = new Dress(120, 206001, "Casual Holiday Ao", "R", "Guard", "Water", "Ao Ohtori", 2960, 184, 222, 50, 7382, 459, 556, 86, 8880, 552, 668, 98, 40, 40, "TierSSS", "./Images/Dresses Icons/206001.png");
const dressID306002 = new Dress(121, 306002, "Magica 1984 Ao", "SR", "Attack", "Water", "Ao Ohtori", 3400, 267, 164, 53, 8479, 666, 411, 89, 10200, 801, 494, 101, 20, 60, "TierSSS", "./Images/Dresses Icons/306002.png");
const dressID106001 = new Dress(122, 106001, "Lounge Wear Ao", "N", "Tank", "Water", "Ao Ohtori", 2520, 201, 179, 41, 6285, 502, 448, 77, 7560, 603, 538, 89, 40, 40, "TierSSS", "./Images/Dresses Icons/106001.png");
const dressID306003 = new Dress(123, 306003, "Magica 2061 Ao", "SR", "Guard", "Water", "Ao Ohtori", 3235, 207, 235, 55, 8068, 517, 587, 91, 9705, 622, 706, 103, 40, 40, "TierSSS", "./Images/Dresses Icons/306003.png");
const dressID206002 = new Dress(124, 206002, "Cooking Apron Ao", "R", "Attack", "Water", "Ao Ohtori", 3180, 202, 189, 60, 7930, 506, 473, 96, 9540, 608, 568, 108, 40, 40, "TierSSS", "./Images/Dresses Icons/206002.png");
const dressID406001 = new Dress(125, 406001, "Magica Round 1 Evo Ao", "UR", "Attack", "Water", "Ao Ohtori", 3455, 282, 201, 55, 8616, 704, 502, 91, 10365, 846, 604, 103, 40, 40, "TierSSS", "./Images/Dresses Icons/406001.png");
const dressID306004 = new Dress(126, 306004, "Hot Doctor Ao", "SR", "Tank", "Dark", "Ao Ohtori", 4005, 201, 190, 58, 9988, 502, 475, 94, 12015, 603, 571, 106, 40, 40, "TierSSS", "./Images/Dresses Icons/306004.png");
const dressID306005 = new Dress(127, 306005, "Hot Player Ao", "SR", "Assist", "Light", "Ao Ohtori", 3510, 210, 213, 47, 8753, 526, 533, 83, 10530, 632, 641, 95, 40, 40, "TierSSS", "./Images/Dresses Icons/306005.png");
const dressID306006 = new Dress(128, 306006, "Real Maid Ao", "SR", "Assist", "Fire", "Ao Ohtori", 3455, 195, 232, 63, 8616, 488, 580, 99, 10365, 587, 697, 111, 40, 40, "TierSSS", "./Images/Dresses Icons/306006.png");
const dressID406002 = new Dress(129, 406002, "Arachne Demon's Style Ao", "UR", "Attack", "Dark", "Ao Ohtori", 3840, 280, 177, 65, 9576, 699, 443, 101, 11520, 841, 532, 113, 40, 40, "TierSSS", "./Images/Dresses Icons/406002.png");
const dressID306008 = new Dress(130, 306008, "Shibuya Halloween Ao", "SR", "Tank", "Lightning", "Ao Ohtori", 3950, 206, 188, 44, 9850, 515, 471, 80, 11850, 619, 566, 92, 40, 40, "TierSSS", "./Images/Dresses Icons/306008.png");
const dressID306009 = new Dress(131, 306009, "Kellnerin Maiden Ao", "SR", "Assist", "Fire", "Ao Ohtori", 3620, 207, 209, 57, 9028, 517, 523, 93, 10860, 622, 629, 105, 40, 40, "TierSSS", "./Images/Dresses Icons/306009.png");
const dressID206003 = new Dress(132, 206003, "Sports Uniform Ao", "R", "Attack", "Water", "Ao Ohtori", 2905, 240, 169, 56, 7245, 600, 423, 92, 8715, 722, 509, 104, 40, 40, "TierSSS", "./Images/Dresses Icons/206003.png");
const dressID406003 = new Dress(133, 406003, "Holiday Bikini Round 1 Ao", "UR", "Tank", "Fire", "Ao Ohtori", 4115, 247, 192, 61, 10262, 617, 479, 97, 12345, 742, 576, 109, 40, 40, "TierSSS", "./Images/Dresses Icons/406003.png");
const dressID306010 = new Dress(134, 306010, "Fighting Goddess ISHTAR Ao", "SR", "Tank", "Water", "Ao Ohtori", 4005, 182, 209, 65, 9988, 454, 522, 101, 12015, 546, 628, 113, 40, 40, "TierSSS", "./Images/Dresses Icons/306010.png");
const dressID406004 = new Dress(135, 406004, "Royal Armor Knight Ao", "UR", "Guard", "Light", "Ao Ohtori", 3565, 204, 272, 50, 8890, 509, 679, 86, 10695, 612, 816, 98, 40, 40, "TierSSS", "./Images/Dresses Icons/406004.png");
const dressID306011 = new Dress(136, 306011, "Magica Round 2 Ao", "SR", "Assist", "Water", "Ao Ohtori", 3675, 212, 200, 56, 9165, 531, 501, 92, 11025, 638, 602, 104, 40, 40, "TierSSS", "./Images/Dresses Icons/306011.png");
const dressID306012 = new Dress(137, 306012, "Leukosia Demon's Style Ao", "SR", "Attack", "Dark", "Ao Ohtori", 3235, 266, 176, 56, 8068, 665, 439, 92, 9705, 800, 528, 104, 40, 40, "TierSSS", "./Images/Dresses Icons/306012.png");
const dressID406007 = new Dress(138, 406007, "Magica Round 2 Evo Ao", "UR", "Attack", "Water", "Ao Ohtori", 3510, 292, 187, 58, 8753, 730, 467, 94, 10530, 878, 561, 106, 40, 40, "TierSSS", "./Images/Dresses Icons/406007.png");
const dressID406005 = new Dress(139, 406005, "Pretty Pirates Ao", "UR", "Attack", "Lightning", "Ao Ohtori", 3400, 286, 201, 53, 8479, 714, 502, 89, 10200, 858, 603, 101, 60, 20, "TierSSS", "./Images/Dresses Icons/406005.png");
const dressID406006 = new Dress(140, 406006, "Ifrit Ao", "UR", "Attack", "Lightning", "Ao Ohtori", 3345, 263, 227, 57, 8342, 656, 568, 93, 10035, 789, 683, 105, 40, 40, "TierSSS", "./Images/Dresses Icons/406006.png");
const dressID406008 = new Dress(141, 406008, "Shinsengumi Law Bureau Ao", "UR", "Tank", "Light", "Ao Ohtori", 4335, 210, 214, 51, 10811, 525, 535, 87, 13005, 631, 643, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/406008.png");
const dressID306013 = new Dress(142, 306013, "Hallowitch 2020 Ao", "SR", "Guard", "Lightning", "Ao Ohtori", 3400, 195, 236, 54, 8479, 488, 589, 90, 10200, 587, 708, 102, 40, 40, "TierSSS", "./Images/Dresses Icons/306013.png");
const dressID107001 = new Dress(143, 107001, "Lounge Wear Aka", "N", "Assist", "Fire", "Aka Ohtori", 2465, 184, 199, 58, 6147, 461, 498, 94, 7395, 554, 599, 106, 40, 40, "TierSSS", "./Images/Dresses Icons/107001.png");
const dressID207001 = new Dress(144, 207001, "Sports Uniform Aka", "R", "Assist", "Fire", "Aka Ohtori", 3345, 187, 193, 53, 8342, 468, 483, 89, 10035, 563, 580, 101, 60, 20, "TierSSS", "./Images/Dresses Icons/207001.png");
const dressID207002 = new Dress(145, 207002, "Cooking Apron Aka", "R", "Tank", "Fire", "Aka Ohtori", 3565, 183, 182, 45, 8890, 458, 456, 81, 10695, 551, 548, 93, 20, 60, "TierSSS", "./Images/Dresses Icons/207002.png");
const dressID207003 = new Dress(146, 207003, "Casual Holiday Aka", "R", "Assist", "Fire", "Aka Ohtori", 3235, 185, 202, 58, 8068, 463, 506, 94, 9705, 557, 608, 106, 40, 40, "TierSSS", "./Images/Dresses Icons/207003.png");
const dressID307001 = new Dress(147, 307001, "Magica Round 1 Aka", "SR", "Assist", "Fire", "Aka Ohtori", 3345, 201, 234, 54, 8342, 502, 585, 90, 10035, 603, 703, 102, 40, 40, "TierSSS", "./Images/Dresses Icons/307001.png");
const dressID307002 = new Dress(148, 307002, "Magica 1984 Aka", "SR", "Tank", "Fire", "Aka Ohtori", 3675, 202, 210, 51, 9165, 506, 526, 87, 11025, 608, 632, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/307002.png");
const dressID307003 = new Dress(149, 307003, "Magica 2061 Aka", "SR", "Assist", "Fire", "Aka Ohtori", 3400, 215, 216, 59, 8479, 538, 539, 95, 10200, 647, 648, 107, 40, 40, "TierSSS", "./Images/Dresses Icons/307003.png");
const dressID407001 = new Dress(150, 407001, "Magica Round 1 Evo Aka", "UR", "Assist", "Fire", "Aka Ohtori", 4060, 203, 240, 52, 10125, 507, 599, 88, 12180, 609, 720, 100, 20, 60, "TierSSS", "./Images/Dresses Icons/407001.png");
const dressID307004 = new Dress(151, 307004, "Hot Doctor Aka", "SR", "Guard", "Fire", "Aka Ohtori", 3015, 200, 257, 59, 7519, 500, 641, 95, 9045, 601, 771, 107, 40, 40, "TierSSS", "./Images/Dresses Icons/307004.png");
const dressID407002 = new Dress(152, 407002, "Gal Army Aka", "UR", "Tank", "Light", "Aka Ohtori", 4280, 251, 177, 50, 10673, 626, 443, 86, 12840, 753, 532, 98, 40, 40, "TierSSS", "./Images/Dresses Icons/407002.png");
const dressID307005 = new Dress(153, 307005, "Adorable Bikini Aka", "SR", "Tank", "Water", "Aka Ohtori", 3785, 211, 195, 60, 9439, 527, 487, 96, 11355, 633, 585, 108, 40, 40, "TierSSS", "./Images/Dresses Icons/307005.png");
const dressID307007 = new Dress(154, 307007, "Western Cowgirl Aka", "SR", "Assist", "Water", "Aka Ohtori", 3840, 194, 208, 51, 9576, 484, 520, 87, 11520, 582, 625, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/307007.png");
const dressID407003 = new Dress(155, 407003, "Onsen Nymph Aka", "UR", "Assist", "Lightning", "Aka Ohtori", 3840, 224, 233, 52, 9576, 559, 583, 88, 11520, 672, 701, 100, 40, 40, "TierSSS", "./Images/Dresses Icons/407003.png");
const dressID407004 = new Dress(156, 407004, "Holy Santa Aka", "UR", "Tank", "Dark", "Aka Ohtori", 4005, 240, 206, 55, 9988, 600, 515, 91, 12015, 721, 619, 103, 40, 40, "TierSSS", "./Images/Dresses Icons/407004.png");
const dressID307008 = new Dress(157, 307008, "Snow Queen Aka", "SR", "Assist", "Light", "Aka Ohtori", 3785, 199, 206, 63, 9439, 497, 516, 99, 11355, 598, 620, 111, 40, 40, "TierSSS", "./Images/Dresses Icons/307008.png");
const dressID407005 = new Dress(158, 407005, "Phoenix Aka", "UR", "Attack", "Fire", "Aka Ohtori", 4005, 304, 142, 56, 9988, 759, 356, 92, 12015, 912, 428, 104, 40, 40, "TierSSS", "./Images/Dresses Icons/407005.png");
const dressID307009 = new Dress(159, 307009, "Man-Eating Demon Aka", "SR", "Attack", "Lightning", "Aka Ohtori", 3730, 238, 171, 55, 9302, 594, 428, 91, 11190, 714, 515, 103, 40, 40, "TierSSS", "./Images/Dresses Icons/307009.png");
const dressID307010 = new Dress(160, 307010, "Leukosia Demon's Style Aka", "SR", "Attack", "Water", "Aka Ohtori", 3510, 255, 168, 52, 8753, 638, 421, 88, 10530, 767, 506, 100, 60, 20, "TierSSS", "./Images/Dresses Icons/307010.png");
const dressID407006 = new Dress(161, 407006, "Pretty Pirates Aka", "UR", "Assist", "Water", "Aka Ohtori", 3895, 225, 228, 66, 9713, 562, 571, 102, 11685, 676, 686, 114, 40, 40, "TierSSS", "./Images/Dresses Icons/407006.png");
const dressID307011 = new Dress(162, 307011, "Dryad Aka", "SR", "Attack", "Lightning", "Aka Ohtori", 3565, 262, 158, 55, 8890, 655, 394, 91, 10695, 788, 474, 103, 60, 20, "TierSSS", "./Images/Dresses Icons/307011.png");
const dressID307012 = new Dress(163, 307012, "Magical Swimsuit Aka", "SR", "Assist", "Light", "Aka Ohtori", 3840, 195, 206, 57, 9576, 488, 516, 93, 11520, 587, 620, 105, 40, 40, "TierSSS", "./Images/Dresses Icons/307012.png");
const dressID407007 = new Dress(164, 407007, "Magica Round 2 Evo Aka", "UR", "Tank", "Fire", "Aka Ohtori", 4280, 194, 234, 57, 10673, 484, 585, 93, 12840, 582, 703, 105, 40, 40, "TierSSS", "./Images/Dresses Icons/407007.png");
const dressID307013 = new Dress(165, 307013, "Magica Round 2 Aka", "SR", "Assist", "Fire", "Aka Ohtori", 3785, 196, 209, 56, 9439, 490, 523, 92, 11355, 589, 629, 104, 40, 40, "TierSSS", "./Images/Dresses Icons/307013.png");
const dressID407008 = new Dress(166, 407008, "Nakano Ichika Aka", "UR", "Tank", "Light", "Aka Ohtori", 4005, 244, 202, 51, 9988, 609, 506, 87, 12015, 732, 608, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/407008.png");
const dressID407009 = new Dress(167, 407009, "Authentic Bunny Aka", "UR", "Assist", "Light", "Aka Ohtori", 4005, 218, 228, 61, 9988, 544, 571, 97, 12015, 654, 666, 109, 40, 40, "TierSSS", "./Images/Dresses Icons/407009.png");
const dressID407010 = new Dress(168, 407010, "Lunatic Succubus Aka", "UR", "Attack", "Water", "Aka Ohtori", 2905, 350, 169, 50, 7245, 875, 423, 86, 8715, 1052, 508, 98, 60, 20, "TierSSS", "./Images/Dresses Icons/407010.png");
const dressID108001 = new Dress(169, 108001, "Lounge Wear Eliza", "N", "Attack", "Lightning", "Eliza Yukifune", 1915, 233, 187, 49, 4776, 583, 468, 85, 5745, 701, 563, 97, 40, 40, "TierSSS", "./Images/Dresses Icons/108001.png");
const dressID208001 = new Dress(170, 208001, "Sports Uniform Eliza", "R", "Assist", "Lightning", "Eliza Yukifune", 3125, 206, 189, 61, 7793, 514, 473, 97, 9375, 618, 569, 109, 40, 40, "TierSSS", "./Images/Dresses Icons/208001.png");
const dressID208002 = new Dress(171, 208002, "Cooking Apron Eliza", "R", "Attack", "Lightning", "Eliza Yukifune", 3125, 217, 178, 48, 7793, 542, 445, 84, 9375, 652, 535, 96, 40, 40, "TierSSS", "./Images/Dresses Icons/208002.png");
const dressID208003 = new Dress(172, 208003, "Casual Holiday Eliza", "R", "Attack", "Lightning", "Eliza Yukifune", 2685, 246, 179, 56, 6696, 614, 447, 92, 8055, 738, 537, 104, 20, 60, "TierSSS", "./Images/Dresses Icons/208003.png");
const dressID308001 = new Dress(173, 308001, "Magica Round 1 Eliza", "SR", "Attack", "Lightning", "Eliza Yukifune", 3015, 246, 211, 53, 7519, 615, 527, 89, 9045, 739, 633, 101, 40, 40, "TierSSS", "./Images/Dresses Icons/308001.png");
const dressID308002 = new Dress(174, 308002, "Magica 1984 Eliza", "SR", "Assist", "Lightning", "Eliza Yukifune", 3345, 212, 223, 60, 8342, 530, 557, 96, 10035, 637, 669, 108, 40, 40, "TierSSS", "./Images/Dresses Icons/308002.png");
const dressID308003 = new Dress(175, 308003, "Magica 2061 Eliza", "SR", "Attack", "Lightning", "Eliza Yukifune", 3675, 253, 160, 61, 9165, 631, 400, 97, 11025, 759, 481, 109, 40, 40, "TierSSS", "./Images/Dresses Icons/308003.png");
const dressID308004 = new Dress(176, 308004, "Arachne Demon's Style Eliza", "SR", "Assist", "Light", "Eliza Yukifune", 3675, 202, 211, 63, 9165, 505, 527, 99, 11025, 607, 633, 111, 40, 40, "TierSSS", "./Images/Dresses Icons/308004.png");
const dressID408001 = new Dress(177, 408001, "Magica Round 1 Evo Eliza", "UR", "Assist", "Lightning", "Eliza Yukifune", 3785, 237, 224, 53, 9439, 591, 560, 89, 11355, 711, 673, 101, 40, 40, "TierSSS", "./Images/Dresses Icons/408001.png");
const dressID308005 = new Dress(178, 308005, "Kawaii Warrior Eliza", "SR", "Attack", "Light", "Eliza Yukifune", 3235, 274, 168, 63, 8068, 684, 421, 99, 9705, 822, 506, 111, 40, 40, "TierSSS", "./Images/Dresses Icons/308005.png");
const dressID408002 = new Dress(179, 408002, "Hot Doctor Eliza", "UR", "Guard", "Lightning", "Eliza Yukifune", 3345, 223, 267, 60, 8342, 557, 668, 96, 10035, 669, 803, 108, 40, 40, "TierSSS", "./Images/Dresses Icons/408002.png");
const dressID408003 = new Dress(180, 408003, "Adorable Bikini Eliza", "UR", "Tank", "Light", "Eliza Yukifune", 4170, 205, 230, 59, 10399, 512, 576, 95, 12510, 615, 692, 107, 60, 20, "TierSSS", "./Images/Dresses Icons/408003.png");
const dressID308006 = new Dress(181, 308006, "Party Girl Eliza", "SR", "Assist", "Fire", "Eliza Yukifune", 3510, 202, 222, 52, 8753, 504, 555, 88, 10530, 606, 667, 100, 40, 40, "TierSSS", "./Images/Dresses Icons/308006.png");
const dressID308007 = new Dress(182, 308007, "Hallowitch Eliza", "SR", "Attack", "Light", "Eliza Yukifune", 3070, 277, 176, 54, 7656, 692, 440, 90, 9210, 832, 529, 102, 40, 40, "TierSSS", "./Images/Dresses Icons/308007.png");
const dressID308008 = new Dress(183, 308008, "Shibuya Halloween Eliza", "SR", "Guard", "Dark", "Eliza Yukifune", 3510, 190, 234, 57, 8753, 475, 584, 93, 10530, 571, 702, 105, 40, 40, "TierSSS", "./Images/Dresses Icons/308008.png");
const dressID408004 = new Dress(184, 408004, "Onsen Nymph Eliza", "UR", "Tank", "Water", "Eliza Yukifune", 4225, 180, 251, 55, 10536, 450, 628, 91, 12675, 541, 755, 103, 40, 40, "TierSSS", "./Images/Dresses Icons/408004.png");
const dressID308009 = new Dress(185, 308009, "Sexy Reindeer Eliza", "SR", "Guard", "Dark", "Eliza Yukifune", 3290, 199, 239, 52, 8205, 498, 597, 88, 9870, 599, 718, 100, 40, 40, "TierSSS", "./Images/Dresses Icons/308009.png");
const dressID408005 = new Dress(186, 408005, "Snow Queen Eliza", "UR", "Attack", "Water", "Eliza Yukifune", 3400, 267, 219, 49, 8479, 668, 547, 85, 10200, 803, 658, 97, 40, 40, "TierSSS", "./Images/Dresses Icons/408005.png");
const dressID308010 = new Dress(187, 308010, "Pretty Pirates Eliza", "SR", "Assist", "Fire", "Eliza Yukifune", 3620, 206, 210, 51, 9028, 515, 526, 87, 10860, 619, 632, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/308010.png");
const dressID408007 = new Dress(188, 408007, "Kurisu Makise Eliza", "UR", "Assist", "Fire", "Eliza Yukifune", 3895, 226, 227, 51, 9713, 565, 568, 87, 11685, 679, 683, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/408007.png");
const dressID408008 = new Dress(189, 408008, "Fighting Goddess ISHTAR Eliza", "UR", "Tank", "Fire", "Eliza Yukifune", 4115, 237, 201, 50, 10262, 593, 503, 86, 12345, 713, 605, 98, 40, 40, "TierSSS", "./Images/Dresses Icons/408008.png");
const dressID408009 = new Dress(190, 408009, "Magical Swimsuit Eliza", "UR", "Attack", "Fire", "Eliza Yukifune", 3565, 273, 203, 60, 8890, 681, 507, 96, 10695, 819, 609, 108, 40, 40, "TierSSS", "./Images/Dresses Icons/408009.png");
const dressID408006 = new Dress(191, 408006, "Leukosia Demon's Style Eliza", "UR", "Attack", "Dark", "Eliza Yukifune", 3455, 284, 199, 51, 8616, 709, 497, 87, 10365, 852, 598, 99, 60, 20, "TierSSS", "./Images/Dresses Icons/408006.png");
const dressID308011 = new Dress(192, 308011, "Goddess of Destiny Eliza", "SR", "Assist", "Water", "Eliza Yukifune", 3565, 216, 204, 60, 8990, 540, 510, 96, 10695, 649, 613, 108, 40, 40, "TierSSS", "./Images/Dresses Icons/308011.png");
const dressID408010 = new Dress(193, 408010, "Magica Round 2 Evo Eliza", "UR", "Attack", "Lightning", "Eliza Yukifune", 3620, 299, 173, 59, 9028, 747, 432, 95, 10860, 898, 519, 107, 40, 40, "TierSSS", "./Images/Dresses Icons/408010.png");
const dressID308012 = new Dress(194, 308012, "Magica Round 2 Eliza", "SR", "Attack", "Lightning", "Eliza Yukifune", 3510, 239, 184, 56, 8753, 598, 461, 92, 10530, 719, 554, 104, 40, 40, "TierSSS", "./Images/Dresses Icons/308012.png");
const dressID109001 = new Dress(195, 109001, "Lounge Wear Lilly", "N", "Tank", "Fire", "Lilly Yarimizu", 2740, 186, 179, 54, 6833, 465, 448, 90, 8220, 559, 538, 102, 40, 40, "TierSSS", "./Images/Dresses Icons/109001.png");
const dressID209001 = new Dress(196, 209001, "Sports Uniform Lilly", "R", "Guard", "Fire", "Lilly Yarimizu", 3015, 162, 240, 66, 7519, 405, 600, 102, 9045, 487, 722, 114, 60, 20, "TierSSS", "./Images/Dresses Icons/209001.png");
const dressID209002 = new Dress(197, 209002, "Cooking Apron Lilly", "R", "Attack", "Fire", "Lilly Yarimizu", 3015, 227, 176, 49, 7519, 567, 439, 85, 9045, 681, 528, 97, 40, 40, "TierSSS", "./Images/Dresses Icons/209002.png");
const dressID209003 = new Dress(198, 209003, "Casual Holiday Lilly", "R", "Assist", "Fire", "Lilly Yarimizu", 3180, 193, 198, 46, 7930, 483, 495, 82, 9540, 581, 595, 94, 40, 40, "TierSSS", "./Images/Dresses Icons/209003.png");
const dressID309001 = new Dress(199, 309001, "Magica Round 1 Lilly", "SR", "Assist", "Fire", "Lilly Yarimizu", 3565, 200, 220, 60, 8890, 500, 550, 96, 10695, 601, 661, 108, 60, 20, "TierSSS", "./Images/Dresses Icons/309001.png");
const dressID309002 = new Dress(200, 309002, "Magica 1984 Lilly", "SR", "Guard", "Fire", "Lilly Yarimizu", 3345, 195, 239, 48, 8342, 488, 598, 84, 10035, 587, 719, 96, 40, 40, "TierSSS", "./Images/Dresses Icons/309002.png");
const dressID309003 = new Dress(201, 309003, "Magica 2061 Lilly", "SR", "Tank", "Fire", "Lilly Yarimizu", 3950, 171, 223, 62, 9850, 428, 558, 98, 11850, 514, 671, 110, 60, 20, "TierSSS", "./Images/Dresses Icons/309003.png");
const dressID309004 = new Dress(202, 309004, "Arachne Demon's Style Lilly", "SR", "Assist", "Lightning", "Lilly Yarimizu", 3620, 206, 210, 65, 9028, 515, 526, 101, 10860, 619, 632, 113, 40, 40, "TierSSS", "./Images/Dresses Icons/309004.png");
const dressID409001 = new Dress(203, 409001, "Magica Round 1 Evo Lilly", "UR", "Attack", "Fire", "Lilly Yarimizu", 3675, 241, 227, 69, 9165, 603, 567, 105, 11025, 725, 681, 117, 60, 20, "TierSSS", "./Images/Dresses Icons/409001.png");
const dressID309005 = new Dress(204, 309005, "Gal Army Lilly", "SR", "Attack", "Dark", "Lilly Yarimizu", 3125, 257, 192, 52, 7793, 643, 480, 88, 9375, 773, 577, 100, 40, 40, "TierSSS", "./Images/Dresses Icons/309005.png");
const dressID309006 = new Dress(205, 309006, "Holiday Bikini Round 1 Lilly", "SR", "Assist", "Lightning", "Lilly Yarimizu", 3455, 202, 226, 53, 8616, 504, 564, 89, 10365, 606, 678, 101, 40, 40, "TierSSS", "./Images/Dresses Icons/309006.png");
const dressID409002 = new Dress(206, 409002, "Party Girl Lilly", "UR", "Attack", "Water", "Lilly Yarimizu", 3345, 264, 226, 50, 8342, 660, 565, 86, 10035, 793, 679, 98, 60, 20, "TierSSS", "./Images/Dresses Icons/409002.png");
const dressID409003 = new Dress(207, 409003, "Western Cowgirl Lilly", "UR", "Tank", "Dark", "Lilly Yarimizu", 4280, 219, 208, 53, 10673, 548, 521, 89, 12840, 659, 626, 101, 40, 40, "TierSSS", "./Images/Dresses Icons/409003.png");
const dressID309007 = new Dress(208, 309007, "Brunhild Warrior Lilly", "SR", "Assist", "Lightning", "Lilly Yarimizu", 3180, 238, 208, 52, 7930, 595, 519, 88, 9540, 715, 624, 100, 40, 40, "TierSSS", "./Images/Dresses Icons/309007.png");
const dressID409004 = new Dress(209, 409004, "Ruffian Princess Lilly", "UR", "Tank", "Fire", "Lilly Yarimizu", 4170, 211, 224, 54, 10399, 527, 561, 90, 12510, 633, 674, 102, 40, 40, "TierSSS", "./Images/Dresses Icons/409004.png");
const dressID309008 = new Dress(210, 309008, "Sadistic Succubus Lilly", "SR", "Assist", "Fire", "Lilly Yarimizu", 3675, 230, 183, 59, 9165, 574, 458, 95, 11025, 690, 550, 107, 60, 20, "TierSSS", "./Images/Dresses Icons/309008.png");
const dressID309009 = new Dress(211, 309009, "Royal Armor Knight Lilly", "SR", "Attack", "Water", "Lilly Yarimizu", 3345, 265, 169, 59, 8342, 663, 423, 95, 10035, 797, 509, 107, 40, 40, "TierSSS", "./Images/Dresses Icons/309009.png");
const dressID409005 = new Dress(212, 409005, "New Year Maiden 2020 Lilly", "UR", "Assist", "Dark", "Lilly Yarimizu", 3840, 233, 224, 55, 9576, 583, 559, 91, 11520, 701, 672, 103, 40, 40, "TierSSS", "./Images/Dresses Icons/409005.png");
const dressID409006 = new Dress(213, 409006, "Magica Round 2 Evo Lilly", "UR", "Attack", "Fire", "Lilly Yarimizu", 3785, 281, 180, 72, 9439, 701, 450, 108, 11355, 843, 541, 120, 40, 40, "TierSSS", "./Images/Dresses Icons/409006.png");
const dressID309010 = new Dress(214, 309010, "Magica Round 2 Lilly", "SR", "Assist", "Fire", "Lilly Yarimizu", 3565, 212, 208, 56, 8890, 529, 521, 92, 10695, 636, 626, 104, 60, 20, "TierSSS", "./Images/Dresses Icons/309010.png");
const dressID409007 = new Dress(215, 409007, "Leukosia Demon's Style Lilly", "UR", "Assist", "Water", "Lilly Yarimizu", 3895, 231, 231, 57, 9713, 577, 577, 93, 11685, 693, 693, 105, 40, 40, "TierSSS", "./Images/Dresses Icons/409007.png");
const dressID309011 = new Dress(216, 309011, "Amane Suzuha Lilly", "SR", "Tank", "Dark", "Lilly Yarimizu", 3950, 214, 180, 54, 9850, 535, 451, 90, 11850, 643, 542, 102, 40, 40, "TierSSS", "./Images/Dresses Icons/309011.png");
const dressID409008 = new Dress(217, 409008, "Holy Santa Lilly", "UR", "Tank", "Water", "Lilly Yarimizu", 4170, 211, 224, 62, 10399, 527, 561, 98, 12510, 633, 674, 110, 40, 40, "TierSSS", "./Images/Dresses Icons/409008.png");
const dressID409009 = new Dress(218, 409009, "Magical Wedding Lilly", "UR", "Attack", "Dark", "Lilly Yarimizu", 3675, 259, 209, 57, 9165, 646, 523, 93, 11025, 777, 629, 105, 40, 40, "TierSSS", "./Images/Dresses Icons/409009.png");
const dressID309012 = new Dress(219, 309012, "Isekai Layers Lilly", "SR", "Assist", "Light", "Lilly Yarimizu", 3785, 208, 187, 52, 9439, 520, 468, 88, 11355, 625, 563, 100, 40, 40, "TierSSS", "./Images/Dresses Icons/309012.png");
const dressID309013 = new Dress(220, 309013, "World B: School Uni Winter Clothes Lilly", "SR", "Assist", "Light", "Lilly Yarimizu", 3785, 203, 203, 55, 9439, 507, 507, 91, 11355, 609, 609, 103, 40, 40, "TierSSS", "./Images/Dresses Icons/309013.png");
const dressID110001 = new Dress(221, 110001, "Lounge Wear Hanabi", "N", "Attack", "Dark", "Hanabi Tamaki", 2190, 225, 177, 53, 5462, 562, 443, 89, 6570, 675, 532, 101, 40, 40, "TierSSS", "./Images/Dresses Icons/110001.png");
const dressID210001 = new Dress(222, 210001, "Sports Uniform Hanabi", "R", "Assist", "Dark", "Hanabi Tamaki", 3125, 197, 198, 54, 7793, 493, 494, 90, 9375, 593, 594, 102, 20, 60, "TierSSS", "./Images/Dresses Icons/210001.png");
const dressID210002 = new Dress(223, 210002, "Cooking Apron Hanabi", "R", "Guard", "Dark", "Hanabi Tamaki", 3235, 174, 214, 53, 8068, 435, 534, 89, 9705, 523, 642, 101, 60, 20, "TierSSS", "./Images/Dresses Icons/210002.png");
const dressID210003 = new Dress(224, 210003, "Casual Holiday Hanabi", "R", "Guard", "Dark", "Hanabi Tamaki", 3125, 191, 204, 58, 7793, 478, 510, 94, 9375, 574, 613, 106, 40, 40, "TierSSS", "./Images/Dresses Icons/210003.png");
const dressID310001 = new Dress(225, 310001, "Magica Round 1 Hanabi", "SR", "Guard", "Dark", "Hanabi Tamaki", 3235, 209, 233, 48, 8068, 522, 583, 84, 9705, 627, 701, 96, 40, 40, "TierSSS", "./Images/Dresses Icons/310001.png");
const dressID310002 = new Dress(226, 310002, "Magica 1984 Hanabi", "SR", "Assist", "Dark", "Hanabi Tamaki", 3455, 221, 207, 61, 8616, 552, 517, 97, 10365, 663, 621, 109, 60, 20, "TierSSS", "./Images/Dresses Icons/310002.png");
const dressID310003 = new Dress(227, 310003, "Magica 2061 Hanabi", "SR", "Attack", "Dark", "Hanabi Tamaki", 3455, 249, 178, 56, 8616, 622, 446, 92, 10365, 748, 536, 104, 40, 40, "TierSSS", "./Images/Dresses Icons/310003.png");
const dressID410001 = new Dress(228, 410001, "Magica Round 1 Evo Hanabi", "UR", "Attack", "Dark", "Hanabi Tamaki", 3345, 309, 181, 56, 8342, 773, 452, 92, 10035, 929, 543, 104, 40, 40, "TierSSS", "./Images/Dresses Icons/410001.png");
const dressID410002 = new Dress(229, 410002, "Arachne Demon's Style Hanabi", "UR", "Assist", "Lightning", "Hanabi Tamaki", 4060, 241, 201, 67, 10125, 602, 503, 103, 12180, 724, 605, 115, 40, 40, "TierSSS", "./Images/Dresses Icons/410002.png");
const dressID410003 = new Dress(230, 410003, "Passionate Cheerleader Hanabi", "UR", "Tank", "Dark", "Hanabi Tamaki", 4060, 221, 221, 52, 10125, 553, 552, 88, 12180, 665, 664, 100, 40, 40, "TierSSS", "./Images/Dresses Icons/410003.png");
const dressID310004 = new Dress(231, 310004, "Fiery Shrine Girl Hanabi", "SR", "Assist", "Light", "Hanabi Tamaki", 3400, 212, 219, 54, 8479, 531, 547, 90, 10200, 638, 657, 102, 40, 40, "TierSSS", "./Images/Dresses Icons/310004.png");
const dressID310005 = new Dress(232, 310005, "Real Maid Hanabi", "SR", "Assist", "Water", "Hanabi Tamaki", 3950, 188, 207, 52, 9850, 469, 517, 88, 11850, 564, 621, 100, 40, 40, "TierSSS", "./Images/Dresses Icons/310005.png");
const dressID410004 = new Dress(233, 410004, "Ancient Sage Hanabi", "UR", "Assist", "Light", "Hanabi Tamaki", 3950, 216, 233, 51, 9850, 541, 583, 87, 11850, 650, 701, 99, 60, 20, "TierSSS", "./Images/Dresses Icons/410004.png");
const dressID310006 = new Dress(234, 310006, "Western Cowgirl Hanabi", "SR", "Guard", "Lightning", "Hanabi Tamaki", 3895, 167, 231, 54, 9713, 418, 577, 90, 11685, 503, 693, 102, 40, 40, "TierSSS", "./Images/Dresses Icons/310006.png");
const dressID310007 = new Dress(235, 310007, "Ruffian Princess Hanabi", "SR", "Assist", "Lightning", "Hanabi Tamaki", 3785, 202, 203, 49, 9439, 506, 507, 85, 11355, 608, 610, 97, 40, 40, "TierSSS", "./Images/Dresses Icons/310007.png");
const dressID310008 = new Dress(236, 310008, "Holy Santa Hanabi", "SR", "Assist", "Lightning", "Hanabi Tamaki", 3675, 173, 240, 60, 9165, 432, 600, 96, 11025, 519, 721, 108, 40, 40, "TierSSS", "./Images/Dresses Icons/310008.png");
const dressID310009 = new Dress(237, 310009, "Royal Armor Knight Hanabi", "SR", "Tank", "Dark", "Hanabi Tamaki", 3730, 231, 178, 51, 9302, 577, 446, 87, 11190, 693, 536, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/310009.png");
const dressID310010 = new Dress(238, 310010, "Phoenix Hanabi", "SR", "Attack", "Lightning", "Hanabi Tamaki", 3675, 261, 152, 59, 9165, 651, 380, 95, 11025, 783, 457, 107, 40, 40, "TierSSS", "./Images/Dresses Icons/310010.png");
const dressID410005 = new Dress(239, 410005, "Anubis Hanabi", "UR", "Assist", "Water", "Hanabi Tamaki", 3785, 227, 233, 58, 9439, 568, 583, 94, 11355, 683, 701, 106, 40, 40, "TierSSS", "./Images/Dresses Icons/410005.png");
const dressID410006 = new Dress(240, 410006, "Brunhild Hanabi", "UR", "Tank", "Fire", "Hanabi Tamaki", 4170, 228, 207, 68, 10399, 570, 517, 104, 12510, 685, 622, 116, 20, 60, "TierSSS", "./Images/Dresses Icons/410006.png");
const dressID410007 = new Dress(241, 410007, "Crow Tengu Hanabi", "UR", "Attack", "Fire", "Hanabi Tamaki", 3290, 294, 199, 65, 8205, 735, 498, 101, 9870, 884, 599, 113, 40, 40, "TierSSS", "./Images/Dresses Icons/410007.png");
const dressID410008 = new Dress(242, 410008, "Leukosia Demon's Style Hanabi", "UR", "Tank", "Light", "Hanabi Tamaki", 4060, 220, 222, 53, 10125, 551, 555, 89, 12180, 662, 667, 101, 40, 40, "TierSSS", "./Images/Dresses Icons/410008.png");
const dressID410009 = new Dress(243, 410009, "Ennui Bikini Hanabi", "UR", "Assist", "Dark", "Hanabi Tamaki", 3565, 242, 234, 52, 8890, 604, 584, 88, 10695, 726, 702, 100, 60, 20, "TierSSS", "./Images/Dresses Icons/410009.png");
const dressID410010 = new Dress(244, 410010, "Nakano Miku Hanabi", "UR", "Attack", "Water", "Hanabi Tamaki", 3620, 259, 213, 55, 9028, 647, 532, 91, 10860, 778, 639, 103, 40, 40, "TierSSS", "./Images/Dresses Icons/410010.png");
const dressID410011 = new Dress(245, 410011, "Magica Round 2 Evo Hanabi", "UR", "Attack", "Dark", "Hanabi Tamaki", 3455, 312, 171, 55, 8616, 779, 427, 91, 10365, 937, 513, 103, 40, 40, "TierSSS", "./Images/Dresses Icons/410011.png");
const dressID310011 = new Dress(246, 310011, "Magica Round 2 Hanabi", "SR", "Attack", "Dark", "Hanabi Tamaki", 3400, 246, 185, 56, 8479, 614, 463, 92, 10200, 738, 557, 104, 40, 40, "TierSSS", "./Images/Dresses Icons/310011.png");
const dressID410012 = new Dress(247, 410012, "Goddess of Destiny Hanabi", "UR", "Assist", "Light", "Hanabi Tamaki", 3840, 234, 223, 62, 9576, 585, 557, 98, 11520, 703, 670, 110, 40, 40, "TierSSS", "./Images/Dresses Icons/410012.png");
const dressID111001 = new Dress(248, 111001, "Lounge Wear Marianne", "N", "Guard", "Light", "Marianne Okada", 2520, 164, 216, 37, 6285, 410, 539, 73, 7560, 493, 648, 85, 40, 40, "TierSSS", "./Images/Dresses Icons/111001.png");
const dressID211001 = new Dress(249, 211001, "Sports Uniform Marianne", "R", "Assist", "Light", "Marianne Okada", 3400, 175, 202, 56, 8479, 437, 505, 92, 10200, 525, 607, 104, 20, 60, "TierSSS", "./Images/Dresses Icons/211001.png");
const dressID211002 = new Dress(250, 211002, "Cooking Apron Marianne", "R", "Tank", "Light", "Marianne Okada", 3620, 187, 175, 45, 9028, 468, 437, 81, 10860, 563, 525, 93, 40, 40, "TierSSS", "./Images/Dresses Icons/211002.png");
const dressID211003 = new Dress(251, 211003, "Casual Holiday Marianne", "R", "Assist", "Light", "Marianne Okada", 3400, 182, 194, 49, 8479, 456, 486, 85, 10200, 548, 584, 97, 40, 40, "TierSSS", "./Images/Dresses Icons/211003.png");
const dressID311001 = new Dress(252, 311001, "Magica Round 1 Marianne", "SR", "Tank", "Light", "Marianne Okada", 4005, 177, 214, 49, 9988, 443, 534, 85, 12015, 532, 642, 97, 40, 40, "TierSSS", "./Images/Dresses Icons/311001.png");
const dressID311002 = new Dress(253, 311002, "Magica 1984 Marianne", "SR", "Assist", "Light", "Marianne Okada", 3840, 170, 231, 52, 9576, 426, 578, 88, 11520, 512, 695, 100, 20, 60, "TierSSS", "./Images/Dresses Icons/311002.png");
const dressID311003 = new Dress(254, 311003, "Magica 2061 Marianne", "SR", "Assist", "Light", "Marianne Okada", 3565, 185, 235, 58, 8890, 463, 587, 94, 10695, 556, 706, 106, 20, 60, "TierSSS", "./Images/Dresses Icons/311003.png");
const dressID311004 = new Dress(255, 311004, "Arachne Demon's Style Marianne", "SR", "Assist", "Dark", "Marianne Okada", 3345, 226, 209, 63, 8342, 565, 522, 99, 10035, 679, 627, 111, 40, 40, "TierSSS", "./Images/Dresses Icons/311004.png");
const dressID411001 = new Dress(256, 411001, "Magica Round 1 Evo Marianne", "UR", "Tank", "Light", "Marianne Okada", 4335, 200, 224, 49, 10811, 501, 559, 85, 13005, 602, 672, 97, 40, 40, "TierSSS", "./Images/Dresses Icons/411001.png");
const dressID411002 = new Dress(257, 411002, "Kawaii Warrior Marianne", "UR", "Attack", "Lightning", "Marianne Okada", 3620, 270, 201, 59, 9028, 675, 503, 95, 10860, 812, 605, 107, 40, 40, "TierSSS", "./Images/Dresses Icons/411002.png");
const dressID311005 = new Dress(258, 311005, "Adorable Bikini Marianne", "SR", "Attack", "Dark", "Marianne Okada", 3345, 245, 190, 55, 8342, 612, 474, 91, 10035, 736, 570, 103, 40, 40, "TierSSS", "./Images/Dresses Icons/311005.png");
const dressID211004 = new Dress(259, 211004, "Toranoana Apron Marianne", "R", "Assist", "Water", "Marianne Okada", 3180, 191, 201, 51, 7930, 477, 502, 87, 9540, 573, 603, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/211004.png");
const dressID311006 = new Dress(260, 311006, "Ancient Sage Marianne", "SR", "Attack", "Water", "Marianne Okada", 3565, 253, 167, 67, 8890, 633, 417, 103, 10695, 761, 501, 115, 40, 40, "TierSSS", "./Images/Dresses Icons/311006.png");
const dressID311007 = new Dress(261, 311007, "Brunhild Warrior Marianne", "SR", "Assist", "Water", "Marianne Okada", 3675, 189, 224, 55, 9165, 472, 560, 91, 11025, 567, 673, 103, 40, 40, "TierSSS", "./Images/Dresses Icons/311007.png");
const dressID411004 = new Dress(262, 411004, "Sadistic Succubus Marianne", "UR", "Attack", "Light", "Marianne Okada", 3565, 267, 209, 58, 8890, 666, 522, 94, 10695, 801, 627, 106, 60, 20, "TierSSS", "./Images/Dresses Icons/411004.png");
const dressID311008 = new Dress(263, 311008, "Sexy Reindeer Marianne", "SR", "Assist", "Lightning", "Marianne Okada", 3950, 184, 210, 51, 9850, 460, 526, 87, 11850, 553, 632, 99, 40, 40, "TierSSS", "./Images/Dresses Icons/311008.png");
const dressID411005 = new Dress(264, 411005, "Valentine Patissier Marianne", "UR", "Assist", "Fire", "Marianne Okada", 3950, 215, 234, 59, 9850, 538, 586, 95, 11850, 647, 704, 107, 40, 40, "TierSSS", "./Images/Dresses Icons/411005.png");
const dressID311009 = new Dress(265, 311009, "Leukosia Demon's Style Marianne", "SR", "Tank", "Lightning", "Marianne Okada", 4060, 180, 207, 56, 10125, 450, 517, 92, 12180, 541, 622, 104, 60, 20, "TierSSS", "./Images/Dresses Icons/311009.png");
const dressID411006 = new Dress(266, 411006, "Daru Marianne", "UR", "Tank", "Lightning", "Marianne Okada", 4225, 235, 197, 48, 10536, 587, 492, 84, 12675, 705, 591, 96, 40, 40, "TierSSS", "./Images/Dresses Icons/411006.png");
const dressID311010 = new Dress(267, 311010, "Anubis Marianne", "SR", "Tank", "Light", "Marianne Okada", 4005, 204, 186, 50, 9988, 511, 466, 86, 12015, 614, 560, 98, 40, 40, "TierSSS", "./Images/Dresses Icons/311010.png");
const dressID411007 = new Dress(268, 411007, "Magica Round 2 Evo Marianne", "UR", "Assist", "Light", "Marianne Okada", 3950, 201, 249, 65, 9850, 502, 622, 101, 11850, 603, 748, 113, 40, 40, "TierSSS", "./Images/Dresses Icons/411007.png");
const dressID311011 = new Dress(269, 311011, "Magica Round 2 Marianne", "SR", "Assist", "Light", "Marianne Okada", 3840, 195, 206, 56, 9576, 488, 516, 92, 11520, 587, 620, 104, 40, 40, "TierSSS", "./Images/Dresses Icons/311011.png");
const dressID411008 = new Dress(270, 411008, "Hallowitch 2020 Marianne", "UR", "Tank", "Water", "Marianne Okada", 4225, 204, 228, 60, 10536, 509, 569, 96, 12675, 612, 684, 108, 20, 60, "TierSSS", "./Images/Dresses Icons/411008.png");
const dressID112001 = new Dress(271, 112001, "Lounge Wear Iko", "N", "Attack", "Lightning", "Iko Oikawa", 2080, 224, 182, 52, 5187, 560, 454, 88, 6240, 673, 546, 100, 40, 40, "TierSSS", "./Images/Dresses Icons/112001.png");
const dressID212001 = new Dress(272, 212001, "Sports Uniform Iko", "R", "Attack", "Lightning", "Iko Oikawa", 3180, 236, 155, 65, 7930, 590, 389, 101, 9540, 709, 467, 113, 40, 40, "TierSSS", "./Images/Dresses Icons/212001.png");
const dressID212002 = new Dress(273, 212002, "Cooking Apron Iko", "R", "Guard", "Lightning", "Iko Oikawa", 2630, 196, 232, 51, 6559, 490, 580, 87, 7890, 589, 697, 99, 60, 20, "TierSSS", "./Images/Dresses Icons/212002.png");
const dressID212003 = new Dress(274, 212003, "Casual Holiday Iko", "R", "Tank", "Lightning", "Iko Oikawa", 3565, 189, 177, 55, 8890, 473, 442, 91, 10695, 568, 531, 103, 60, 20, "TierSSS", "./Images/Dresses Icons/212003.png");
const dressID312001 = new Dress(275, 312001, "Magica Round 1 Iko", "SR", "Guard", "Lightning", "Iko Oikawa", 3345, 204, 231, 61, 8342, 509, 577, 97, 10035, 612, 694, 109, 40, 40, "TierSSS", "./Images/Dresses Icons/312001.png");
const dressID312002 = new Dress(276, 312002, "Magica 1984 Iko", "SR", "Tank", "Lightning", "Iko Oikawa", 3895, 201, 197, 54, 9713, 502, 492, 90, 11685, 604, 592, 102, 40, 40, "TierSSS", "./Images/Dresses Icons/312002.png");
const dressID312003 = new Dress(277, 312003, "Magica 2061 Iko", "SR", "Guard", "Lightning", "Iko Oikawa", 3345, 198, 237, 49, 8342, 494, 592, 85, 10035, 594, 712, 97, 40, 40, "TierSSS", "./Images/Dresses Icons/312003.png");
const dressID312004 = new Dress(278, 312004, "Arachne Demon's Style Iko", "SR", "Assist", "Water", "Iko Oikawa", 3125, 223, 226, 61, 7793, 558, 565, 97, 9375, 671, 679, 109, 40, 40, "TierSSS", "./Images/Dresses Icons/312004.png");
const dressID412001 = new Dress(279, 412001, "Magica Round 1 Evo Iko", "UR", "Guard", "Lightning", "Iko Oikawa", 3675, 217, 251, 60, 9165, 542, 627, 96, 11025, 652, 754, 108, 40, 40, "TierSSS", "./Images/Dresses Icons/412001.png");
const dressID312005 = new Dress(280, 312005, "Gal Army Iko", "SR", "Assist", "Water", "Iko Oikawa", 3510, 214, 210, 52, 8753, 534, 525, 88, 10530, 642, 631, 100, 40, 40, "TierSSS", "./Images/Dresses Icons/312005.png");
const dressID412002 = new Dress(281, 412002, "Hot Player Iko", "UR", "Attack", "Fire", "Iko Oikawa", 3620, 267, 204, 57, 9028, 668, 511, 93, 10860, 803, 614, 105, 60, 20, "TierSSS", "./Images/Dresses Icons/412002.png");
const dressID212004 = new Dress(282, 212004, "Toranoana Apron Iko", "R", "Assist", "Lightning", "Iko Oikawa", 3345, 204, 177, 59, 8342, 509, 442, 95, 10035, 612, 531, 107, 40, 40, "TierSSS", "./Images/Dresses Icons/212004.png");
const dressID312006 = new Dress(283, 312006, "Fluffy Rabbit Iko", "SR", "Assist", "Dark", "Iko Oikawa", 3235, 229, 213, 48, 8068, 572, 533, 84, 9705, 687, 641, 96, 20, 60, "TierSSS", "./Images/Dresses Icons/312006.png");
const dressID312007 = new Dress(284, 312007, "Onsen Nymph Iko", "SR", "Assist", "Fire", "Iko Oikawa", 3400, 214, 217, 71, 8479, 534, 543, 107, 10200, 642, 653, 119, 40, 40, "TierSSS", "./Images/Dresses Icons/312007.png");
const dressID312008 = new Dress(285, 312008, "Valentine Patissier Iko", "SR", "Tank", "Dark", "Iko Oikawa", 4060, 180, 207, 60, 10125, 450, 517, 96, 12180, 541, 622, 108, 40, 40, "TierSSS", "./Images/Dresses Icons/312008.png");
const dressID412003 = new Dress(286, 412003, "Stray Cat Iko", "UR", "Attack", "Water", "Iko Oikawa", 3345, 281, 209, 65, 8342, 701, 523, 101, 10035, 843, 629, 113, 40, 40, "TierSSS", "./Images/Dresses Icons/412003.png");
const dressID412004 = new Dress(287, 412004, "Glitter Idol Iko", "UR", "Tank", "Lightning", "Iko Oikawa", 4500, 205, 208, 47, 11222, 513, 519, 83, 13500, 617, 624, 95, 40, 40, "TierSSS", "./Images/Dresses Icons/412004.png");
const dressID412005 = new Dress(288, 412005, "Dryad Iko", "UR", "Assist", "Dark", "Iko Oikawa", 3950, 206, 244, 52, 9850, 515, 609, 88, 11850, 619, 732, 100, 40, 40, "TierSSS", "./Images/Dresses Icons/412005.png");
const dressID412006 = new Dress(289, 412006, "Magica Round 2 Evo Iko", "UR", "Guard", "Lightning", "Iko Oikawa", 3620, 194, 278, 60, 9028, 485, 694, 96, 10860, 583, 834, 108, 40, 40, "TierSSS", "./Images/Dresses Icons/412006.png");
const dressID312009 = new Dress(290, 312009, "Magica Round 2 Iko", "SR", "Guard", "Lightning", "Iko Oikawa", 3345, 189, 245, 56, 8342, 473, 613, 92, 10035, 569, 737, 104, 40, 40, "TierSSS", "./Images/Dresses Icons/312009.png");
const dressID312010 = new Dress(291, 312010, "Ifrit Iko", "SR", "Attack", "Dark", "Iko Oikawa", 3015, 263, 194, 55, 7519, 657, 484, 91, 9045, 790, 582, 103, 60, 20, "TierSSS", "./Images/Dresses Icons/312010.png");
const dressID412007 = new Dress(292, 412007, "Leviathan Iko", "UR", "Assist", "Water", "Iko Oikawa", 3730, 253, 212, 63, 9302, 631, 529, 99, 11190, 759, 636, 111, 40, 40, "TierSSS", "./Images/Dresses Icons/412007.png");
const dressID312011 = new Dress(293, 312011, "Ennui Bikini Iko", "SR", "Tank", "Fire", "Iko Oikawa", 4005, 207, 183, 62, 9988, 518, 458, 98, 12015, 623, 551, 110, 40, 40, "TierSSS", "./Images/Dresses Icons/312011.png");
const dressID412008 = new Dress(294, 412008, "Nakano Nino Iko", "UR", "Assist", "Dark", "Iko Oikawa", 3895, 212, 241, 61, 9713, 531, 602, 97, 11685, 638, 724, 109, 40, 40, "TierSSS", "./Images/Dresses Icons/412008.png");
const dressID412009 = new Dress(295, 412009, "Hallowitch 2020 Iko", "UR", "Attack", "Fire", "Iko Oikawa", 3730, 265, 199, 62, 9302, 662, 498, 98, 11190, 796, 599, 110, 40, 40, "TierSSS", "./Images/Dresses Icons/412009.png");


const dressArray = [dressID101001, dressID201001, dressID201002, dressID201003, dressID301001, dressID301002, dressID301003, dressID401001, dressID401002, dressID401003, dressID301004, dressID401004, dressID301005, dressID301006, dressID301007, dressID401005, dressID301008, dressID401006, dressID301010, dressID401007, dressID301011, dressID301009, dressID401008, dressID301012, dressID401009, dressID301013, dressID102001, dressID202001, dressID202002, dressID202003, dressID302001, dressID302002, dressID302003, dressID302004, dressID402001, dressID302005, dressID402002, dressID302006, dressID302007, dressID302008, dressID402003, dressID302009, dressID302010, dressID402004, dressID302011, dressID402005, dressID402006, dressID402007, dressID402008, dressID103001, dressID203001, dressID203002, dressID203003, dressID303001, dressID303002, dressID303003, dressID403001, dressID403002, dressID303004, dressID303005, dressID303006, dressID403003, dressID303007, dressID403004, dressID303008, dressID403005, dressID303009, dressID403006, dressID403007, dressID403008, dressID403009, dressID104001, dressID204001, dressID204002, dressID204003, dressID304001, dressID304002, dressID304003, dressID404001, dressID304004, dressID304005, dressID204004, dressID404002, dressID404003, dressID304006, dressID304007, dressID404004, dressID404005, dressID304008, dressID304009, dressID404006, dressID404007, dressID304010, dressID305001, dressID405001, dressID305002, dressID405002, dressID405003, dressID105001, dressID405004, dressID305003, dressID405005, dressID405006, dressID405007, dressID305004, dressID205001, dressID405008, dressID305005, dressID305006, dressID305007, dressID305008, dressID205002, dressID205003, dressID405009, dressID305009, dressID405010, dressID305010, dressID405011, dressID306001, dressID206001, dressID306002, dressID106001, dressID306003, dressID206002, dressID406001, dressID306004, dressID306005, dressID306006, dressID406002, dressID306008, dressID306009, dressID206003, dressID406003, dressID306010, dressID406004, dressID306011, dressID306012, dressID406007, dressID406005, dressID406006, dressID406008, dressID306013, dressID107001, dressID207001, dressID207002, dressID207003, dressID307001, dressID307002, dressID307003, dressID407001, dressID307004, dressID407002, dressID307005, dressID307007, dressID407003, dressID407004, dressID307008, dressID407005, dressID307009, dressID307010, dressID407006, dressID307011, dressID307012, dressID407007, dressID307013, dressID407008, dressID407009, dressID407010, dressID108001, dressID208001, dressID208002, dressID208003, dressID308001, dressID308002, dressID308003, dressID308004, dressID408001, dressID308005, dressID408002, dressID408003, dressID308006, dressID308007, dressID308008, dressID408004, dressID308009, dressID408005, dressID308010, dressID408007, dressID408008, dressID408009, dressID408006, dressID308011, dressID408010, dressID308012, dressID109001, dressID209001, dressID209002, dressID209003, dressID309001, dressID309002, dressID309003, dressID309004, dressID409001, dressID309005, dressID309006, dressID409002, dressID409003, dressID309007, dressID409004, dressID309008, dressID309009, dressID409005, dressID409006, dressID309010, dressID409007, dressID309011, dressID409008, dressID409009, dressID309012, dressID309013, dressID110001, dressID210001, dressID210002, dressID210003, dressID310001, dressID310002, dressID310003, dressID410001, dressID410002, dressID410003, dressID310004, dressID310005, dressID410004, dressID310006, dressID310007, dressID310008, dressID310009, dressID310010, dressID410005, dressID410006, dressID410007, dressID410008, dressID410009, dressID410010, dressID410011, dressID310011, dressID410012, dressID111001, dressID211001, dressID211002, dressID211003, dressID311001, dressID311002, dressID311003, dressID311004, dressID411001, dressID411002, dressID311005, dressID211004, dressID311006, dressID311007, dressID411004, dressID311008, dressID411005, dressID311009, dressID411006, dressID311010, dressID411007, dressID311011, dressID411008, dressID112001, dressID212001, dressID212002, dressID212003, dressID312001, dressID312002, dressID312003, dressID312004, dressID412001, dressID312005, dressID412002, dressID212004, dressID312006, dressID312007, dressID312008, dressID412003, dressID412004, dressID412005, dressID412006, dressID312009, dressID312010, dressID412007, dressID312011, dressID412008, dressID412009]

//document.getElementById("InspectorNameDisplay").innerHTML = "Hello boi";
//document.getElementById('InspectorNameDisplay').innerHTML = dressID101001.dressName;

//(dressID, dressAssetID, dressName, rarity, type, attribute, character, hp1, atk1, def1, agi1, hp60, atk60, def60, agi60, hp80, atk80, def80, agi80, fcs, res)

function showDressOnInspector(dressID){
  document.getElementById('InspectorNameDisplay').innerHTML = "Dress Name: " + dressID.dressName;
  document.getElementById('InspectorRarityDisplay').innerHTML = "Rarity: " + dressID.rarity;
  document.getElementById('InspectorTypeDisplay').innerHTML = "Type: " + dressID.type;
  document.getElementById('InspectorAttributeDisplay').innerHTML = "Attribute: " + dressID.attribute;
  document.getElementById('InspectorCharacterDisplay').innerHTML = "Character: " + dressID.character;
  document.getElementById('InspectorHP1Display').innerHTML = "Hp lv.1: " + dressID.hp1;
  document.getElementById('InspectorATK1NameDisplay').innerHTML = "Atk lv.1: " + dressID.atk1;
  document.getElementById('InspectorDEF1NameDisplay').innerHTML = "Def lv.1: " + dressID.def1;
  document.getElementById('InspectorAGI1NameDisplay').innerHTML = "Agi lv.1: " + dressID.agi1;
  document.getElementById('InspectorHP60Display').innerHTML = "Hp lv.60: " + dressID.hp60;
  document.getElementById('InspectorATK60NameDisplay').innerHTML = "Atk lv.60: " + dressID.atk60;
  document.getElementById('InspectorDEF60NameDisplay').innerHTML = "Def lv.60: " + dressID.def60;
  document.getElementById('InspectorAGI60NameDisplay').innerHTML = "Agi lv.60: " + dressID.agi60;
  document.getElementById('InspectorHP80Display').innerHTML = "Hp lv.80: " + dressID.hp80;
  document.getElementById('InspectorATK80NameDisplay').innerHTML = "Atk lv.80: " + dressID.atk80;
  document.getElementById('InspectorDEF80NameDisplay').innerHTML = "Def lv.80: " + dressID.def80;
  document.getElementById('InspectorAGI80NameDisplay').innerHTML = "Agi lv.80: " + dressID.agi80;
  document.getElementById('InspectorFCSNameDisplay').innerHTML = "Fcs: " + dressID.fcs;
  document.getElementById('InspectorRESNameDisplay').innerHTML = "Res: " + dressID.res;
  document.getElementById('InspectorPictureDisplay').src = dressID.pictureAddress;
};
//String(dressID.pictureAddress)


function DressBoxCreation (dressID) {
  var inputDressBox = document.createElement("input");
  inputDressBox.setAttribute('type', 'image');
  inputDressBox.className = 'dressBox';
  inputDressBox.setAttribute('id', dressID.dressName);
  inputDressBox.setAttribute('src', dressID.pictureAddress);
  inputDressBox.setAttribute('onclick', "showDressOnInspector(dressID"+dressID.dressAssetID+")")
  document.getElementById(dressID.rank).appendChild(inputDressBox);
}

//document.getElementById("TierC").appendChild(DressBoxCreation (dressID311005));
//inputDressBox.onclick = showDressOnInspector(dressID412009);
//dressArray.forEach((x, i) => DressBoxCreation(i.dressID));

function TierFillingEverything () {
  for (var i = 0; i < dressArray.length; i++) {
    DressBoxCreation(dressArray[i]);
  }
}

function TierClearEverything () {
  document.querySelectorAll('.dressBox').forEach(e => e.remove());
}

function TierFillingWithFilters (filterOption) {
  TierClearEverything();
  for (var i = 0; i < dressArray.length; i++) {
    if (dressArray[i].rarity == filterOption || dressArray[i].type == filterOption || dressArray[i].attribute == filterOption || dressArray[i].onGlobal == filterOption) {
      DressBoxCreation(dressArray[i]);
    }
  }
}

function TierFilterOnlySR () {
  TierClearEverything();
  for (var i = 0; i < dressArray.length; i++) {
    if (dressArray[i].rarity == "SR") {
      DressBoxCreation(dressArray[i]);
    }
  }
}



TierFillingEverything();






// display: none; en css para ocultar los iconos si quieres hacer filtros asi
