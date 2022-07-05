var sb = document.getElementById("sb");

//images
var arr1 = ["img/4.jfif", "img/1.png", "img/2.jpg", "img/3.jpg"];

var arr2= ["img/5.jfif", "img/6.jfif", "img/7.jfif", "img/8.jfif"];
var arr3 = ["img/9.jfif", "img/10.jfif", "img/11.jfif", "img/12.jfif", "img/13.jfif"];
var arr4 = ["img/14.jfif", "img/15.jfif", "img/16.jfif", "img/17.jfif", "img/18.jfif"];
 var arr5 =["img/18.jfif","img/19.jfif","img/20.jfif","img/21.jfif","img/22.jfif"];
 var arr6 =["img/23.jfif","img/24.png","img/25.jpg"];
//paragraph
var arr11 = [" <br><br><br>Acidic Nature: <br>So, soil which has Ph from 0 To 3 is strongly acidic soil which is not good for the growth plants and crops. In this type of soil we have to increase their pH  upto 4 so that we can take some crops in this type of soil. Few techniques to reduce it are as follows:", "Technique 1: Adding Limestone <br>Limestones are very good in raising the pH of the soil. If the soil is very acidic (pH is very low) you can reduce the acidity of the soil by adding limestones into the soil .If you want to quickly reduce the acidity use the hydrated lime, just remember it is hard to control though.", "Technique 2 :Adding wood ashes <br>Hardwood ash contains calcium. So adding wood ash will raise the pH level of the soil. But it is lighter compared to lime as it has half the calcium that the lime has. So if you want to add wood ash in place of lime apply twice as much lime.", "Technique 3: Add baking soda <br> Baking soda is a cost-effective method to increase soil pH . It also works very quickly and can produce results in a few days.After using this methods the soil of the pH is increase  about 4 to 5 so know we can take any crops in which are taken in 4 to 5 pH of soil.<vr><br> <b>best ph range for crops from 4 to 9</b>"];
var arr22 = ["<br><br><br>Potatoes are a cool-weather crop, but the leafy tops can’t tolerate more than a light frost. Plant potatoes so they come to harvest when the weather is cool but not cold. In cold-winter climates, plant seed potatoes in the garden in spring as soon as the soil can be worked—usually about 3 weeks before the planting.", "<br><br><br>The blueberry is easy to plant and grow. The blueberry plant is best planted and grown where summers are cool and the soil is acidic. There are varieties that will grow in warm, dry summer regions.Blueberries are long-lived. Plant them where they can grow undisturbed for 10 or more years. Blueberries require the soil to have a pH between 4.3 to 5.5 pH. This is unique, because most fruit and vegetable plants do best in a relatively neutral pH soil between about 6.5-7.5.", "<br><br><br>This trumpet-shaped flower has a violet-blue color that looks stunning in patios and lawns. It grows fast and appreciates part sun to full sunlight for best growth. The starry flower in a blue hue continues to display from late springs to early summers. Once the flowers fade, the foliage turns yellowish gold, giving the plant an exotic appearance.For true blue flowers, the hydrangeas need to be grown in acidic soil with a pH of 5.5 or lower.", "<br><br><br>Pines are softwoods, but commercially they may be designated as soft pines or hard pines. Soft pines, such as white, sugar, and piñon pines, have relatively soft timber, needles in bundles of five (less commonly, one to four), stalked  with scales lacking prickles, and little resin. Their wood is close-grained, with thin, nearly white sapwood; the sheaths of the leaf clusters are deciduous, and the leaves contain a single fibrovascular bundle."];
var arr33 = ["<br><br><br>o	Plant peanuts in full sun.<br>o	Peanuts grow best in loose, well-drained soil rich in organic matter. A sandy-loamy soil is best. The soil must be loose so that the pegs can penetrate and grow.<br>o	Double-dig clay soil and add gypsum and aged compost.<br>o	Peanuts prefer a soil pH of 5.8 to 6.2.", "<br><br><br>Sweet potatoes grow best in long-season regions (150 to 160 days of frost-free weather) where summers are hot but not excessively rainy. The optimal temperature range for best growth is 70°to 85°F (21°-29°C).<br>Sweet Potato planting details<br>o	Planting depth: Set slips 4 to 8 inches deepo	Space between plants: 15 incheso	Days to harvest: 100 to 170o	Storage period: 4-6 monthso	Suggested varieties: Allgood, Beauregard, Centennial, Jewel, Vardamen<br>", "<br><br><br><br>Carrots are among the easiest garden vegetables to grow—and the most bountiful–given the right conditions.br>Grow carrots in the cool time of the year—spring and autumn. <br>Plant carrots in loose, compost-rich soil free of pebbles, stones, or other obstructions.", "<br>Grow corn in the warm time of the year. Direct sow corn after all danger of frost has passed. <br>Make succession sowings for a continuous harvest throughout the growing season. Three types of sweet corn Corn growing starts with deciding which type of corn to plant: standard, sugar-enhanced, or super-sweet.", "<br><br><br>Garlic can be planted in spring or in fall. <br>Spring planted garlic is harvested late in the summer or early autumn. <br>Fall planted garlic is harvested in mid-summer, the summer after fall planting. Fall planted garlic will produce larger bulbs and cloves than spring-planted garlic.", ""];
var arr44 = ["<br><br><br><br>Beets are rich in folate (vitamin B9) which helps cells grow and function. Folate plays a key role in controlling damage to blood vessels, which can reduce the risk of heart disease and stroke. Beets are naturally high in nitrates, which are turned into nitric oxide in the body.", "<br><br><br><br>Onions contain compounds called diallyl disulfide and lipid transfer protein, which can cause allergy symptoms like asthma, runny nose, nasal congestion, red eyes, itchy eyes and nose, and contact dermatitis, characterized by a red, itchy rash ( 9 , 10 ).", "<br><br><br>A root vegetable with a crisp texture and a peppery hot flavour. The hotness of the radish varies from mild to very strong, depending on the age and type. The different types  come in a variety of sizes, shapes, and colours.", "<br><br><br>               Watermelon is grown in favourable climates from tropical to temperate regions worldwide for its large edible fruit, which is a berry with a hard rind and no internal divisions, and is botanically called a pepo.", "<br><br><br>            Mustard, condiment made from the pungent seeds of either of two main herbs belonging to the family Brassicaceae. The principal types are white, or yellow, mustard (Sinapis alba), a plant of Mediterranean origin; and brown, or Indian, mustard (Brassica juncea), which is of Himalayan origin."];
var arr55 =["<br><br><br>Asparagus, or garden asparagus, folk name sparrow grass, scientific name Asparagus officinalis, is a perennial flowering plant species in the genus Asparagus. Its young shoots are used as a spring vegetable. It was once classified in the lily family, like the related Allium species, onions and garlic.","<br><br><br>   <br><br><br>  <br><br><br>  <br><br><br>                     The common sunflower (H. annuus) is an annual herb with a rough hairy stem 1–4.5 metres (3–15 feet) high and broad, coarsely toothed, rough leaves 7.5–30 cm (3–12 inches) long arranged in spirals. The attractive heads of flowers are 7.5–15 cm wide in wild specimens and often 30 cm or more in cultivated types.","<br><br><br>                      Cabbage, comprising several cultivars of Brassica oleracea, is a leafy green, red (purple), or white (pale green) biennial plant grown as an annual vegetable crop for its dense-leaved heads. It is descended from the wild cabbage (B. oleracea var).","<br><br><br>They include such apparently diverse forms as cabbage, kale, brussels sprouts, kohlrabi, broccoli and cauliflower (Figure 1). All of these were, however, domesticated from one ancestral species, the wild cabbage, Brassica oleracea[1].","<br><br><br><br><br><br>  <br><br><br>  <br><br><br>  The pea is most commonly the small spherical seed or the seed-pod of the pod fruit Pisum sativum. Each pod contains several peas, which can be green or yellow. A pea, although treated as a vegetable in cooking, is botanically a fruit; the term is most commonly used to describe the small spherical seeds or the pods of the legume Pisum sativum.[1] This was the original model organism used by Gregor Mendel in his early work on genetics"];
var arr66 =["<br><br><br> <br><br><br> So , the soil with pH 9 to 14 is strongly basic in nature .the basic soil are not good for the growth of the soil<br>How Do You Decrease Soil pH?","<br><br> Technique 1: <br>Ammonium forms nitric acid as it oxidizes hence adding more acid to the soil leading to a decrease in soil pH.","<br><br><br> Technique 2: Adding sulphur<br>Elemental sulfur is also one of the best compounds to decrease soil ph. Apply an amount of 300 to 500 per hectare to your alkaline soils. Elemental sulfur oxidizes slowly forming sulphuric acid."];






function fun() {




    if (Number(sb.value) >= 0 && Number(sb.value) <= 3 && sb.value.length != 0) {
        alert("0 to 3 ph value crops are successfully received statuscode -> 200 please click "+"OK"+"to proceed");
        document.getElementById("cropimg1").src = arr1[0];
        document.getElementById("para1").innerHTML = arr11[0];
        document.getElementById("cropimg2").src = arr1[1];
        document.getElementById("para2").innerHTML = arr11[1];
        document.getElementById("cropimg3").src = arr1[2];
        document.getElementById("para3").innerHTML = arr11[2];
        document.getElementById("cropimg4").src = arr1[3];
        document.getElementById("para4").innerHTML = arr11[3];
        document.getElementById("cropimg4").src = " ";
        document.getElementById("para4").innerHTML = " ";
        document.getElementById("cropimg5").src = " ";
        document.getElementById("para5").innerHTML = " ";

    } else if (Number(sb.value) >= 3.1 && Number(sb.value) <= 5) {
        alert("3.1 to 5 ph value crops are successfully received statuscode -> 200 please click "+"OK"+"to proceed");

        document.getElementById("name1").innerHTML = "Potato";
        document.getElementById("cropimg1").src = arr2[0];
        document.getElementById("para1").innerHTML = arr22[0];
        document.getElementById("name2").innerHTML = "BlueBerry";
        document.getElementById("cropimg2").src = arr2[1];
        document.getElementById("para2").innerHTML = arr22[1];
        document.getElementById("name3").innerHTML = "Blue Flowered";
        document.getElementById("cropimg3").src = arr2[2];
        document.getElementById("para3").innerHTML = arr22[2];
        document.getElementById("name4").innerHTML = "pine";
        document.getElementById("cropimg4").src = arr2[3];
        document.getElementById("para4").innerHTML = arr22[3];
        document.getElementById("name5").innerHTML = " ";
        document.getElementById("cropimg5").src = " ";
        document.getElementById("para5").innerHTML = " ";
        

    } else if (Number(sb.value) >= 5.1 && Number(sb.value) <= 6) {
        alert("5.1 to 6 ph value crops are successfully received statuscode -> 200 please click "+"OK"+"to proceed");

        document.getElementById("name1").innerHTML = "Peanut";
        document.getElementById("cropimg1").src = arr3[0];
        document.getElementById("para1").innerHTML = arr33[0];
        document.getElementById("name2").innerHTML = "Sweet Potato";
        document.getElementById("cropimg2").src = arr3[1];
        document.getElementById("para2").innerHTML = arr33[1];
        document.getElementById("name3").innerHTML = "Carrots";
        document.getElementById("cropimg3").src = arr3[2];
        document.getElementById("para3").innerHTML = arr33[2];
        document.getElementById("name4").innerHTML = "Corn";
        document.getElementById("cropimg4").src = arr3[3];
        document.getElementById("para4").innerHTML = arr33[3];
        document.getElementById("name5").innerHTML = "Garlic";
        document.getElementById("cropimg5").src = arr3[4];
        document.getElementById("para5").innerHTML = arr33[4];


    } else if (Number(sb.value) >= 6.1 && Number(sb.value) <= 7) {
        alert("6.1 to 7 ph value crops are successfully received statuscode -> 200 please click "+"OK"+"to proceed");

        document.getElementById("name1").innerHTML = "Beet";
        document.getElementById("cropimg1").src = arr4[0];
        document.getElementById("para1").innerHTML = arr44[0];
        document.getElementById("name2").innerHTML = "Onion";
        document.getElementById("cropimg2").src = arr4[1];
        document.getElementById("para2").innerHTML = arr44[1];
        document.getElementById("name3").innerHTML = "Radish";
        document.getElementById("cropimg3").src = arr4[2];
        document.getElementById("para3").innerHTML = arr44[2];
        document.getElementById("name4").innerHTML = "Watermelon";
        document.getElementById("cropimg4").src = arr4[3];
        document.getElementById("para4").innerHTML = arr44[3];
        document.getElementById("name5").innerHTML = "Mustard";
        document.getElementById("cropimg5").src = arr4[4];
        document.getElementById("para5").innerHTML = arr44[4];

    } else if (Number(sb.value) >= 7.1 && Number(sb.value) <= 9) {
        alert("7.1 to 9 ph value crops are successfully received statuscode -> 200 please click "+"OK"+"to proceed");

        document.getElementById("name1").innerHTML = "Asparagus";
        document.getElementById("cropimg1").src = arr5[0];
        document.getElementById("para1").innerHTML = arr55[0];
        document.getElementById("name2").innerHTML = "Sunflower";
        document.getElementById("cropimg2").src = arr5[1];
        document.getElementById("para2").innerHTML = arr55[1];
        document.getElementById("name3").innerHTML = "Cabbage";
        document.getElementById("cropimg3").src = arr5[2];
        document.getElementById("para3").innerHTML = arr55[2];
        document.getElementById("name4").innerHTML = "Couliflower";
        document.getElementById("cropimg4").src = arr5[3];
        document.getElementById("para4").innerHTML = arr55[3];
        document.getElementById("name5").innerHTML = "Pea";
        document.getElementById("cropimg5").src = arr5[4];
        document.getElementById("para5").innerHTML = arr55[4];

    }else if (Number(sb.value) >= 9.1 && Number(sb.value) <= 14) {
        alert("9.1 to 14 ph value crops are successfully received statuscode -> 200 please click "+"OK"+"to proceed");

        document.getElementById("name1").innerHTML = " ";
        document.getElementById("cropimg1").src = arr6[0];
        document.getElementById("para1").innerHTML = arr66[0];
        document.getElementById("name2").innerHTML = " ";
        document.getElementById("cropimg2").src = arr6[1];
        document.getElementById("para2").innerHTML = arr66[1];
        document.getElementById("name3").innerHTML = " ";
        document.getElementById("cropimg3").src = arr6[2];
        document.getElementById("para3").innerHTML = arr66[2];
        document.getElementById("name4").innerHTML = " ";
        document.getElementById("cropimg4").src = " ";
        document.getElementById("para4").innerHTML = " ";
        document.getElementById("name5").innerHTML = " ";
        document.getElementById("cropimg5").src = " ";
        document.getElementById("para5").innerHTML = " ";

       
    } else {
        alert("error -> 404 enter valid ph value");

        document.getElementById("name1").innerHTML = " ";
        document.getElementById("cropimg1").src = " ";
        document.getElementById("para1").innerHTML = "<h1>enter valid ph value. enter the ph value from 0 to 14</h1>";
        document.getElementById("name2").innerHTML = " ";
        document.getElementById("cropimg2").src = " ";
        document.getElementById("para2").innerHTML = "enter valid ph value. enter the ph value from 0 to 14";
        document.getElementById("name3").innerHTML = " ";
        document.getElementById("cropimg3").src = " ";
        document.getElementById("para3").innerHTML = "enter valid ph value. enter the ph value from 0 to 14";
        document.getElementById("name4").innerHTML = " ";
        document.getElementById("cropimg4").src = " ";
        document.getElementById("para4").innerHTML = "enter valid ph value. enter the ph value from 0 to 14";
        document.getElementById("name5").innerHTML = " ";
        document.getElementById("cropimg5").src = " ";
        document.getElementById("para5").innerHTML = "enter valid ph value. enter the ph value from 0 to 14";


    }

    if(sb.value.length == 0){
        alert("enter valid ph value");
        document.getElementById("name1").innerHTML = " ";
        document.getElementById("cropimg1").src = " ";
        document.getElementById("para1").innerHTML = " ";
        document.getElementById("name2").innerHTML = " ";
        document.getElementById("cropimg2").src = " ";
        document.getElementById("para2").innerHTML =  " ";
        document.getElementById("name3").innerHTML = " ";
        document.getElementById("cropimg3").src = " ";
        document.getElementById("para3").innerHTML =  " ";
        document.getElementById("name4").innerHTML = " ";
        document.getElementById("cropimg4").src = " ";
        document.getElementById("para4").innerHTML = " ";
        document.getElementById("name5").innerHTML = " ";
        document.getElementById("cropimg5").src = " ";
        document.getElementById("para5").innerHTML = " ";

    }

}