/*variables*/{
    var all_units={
        names:["ТГ-5"   ,"КВ-2"  ,"ЗиС-41"],
        size: ["6x10"   ,"3x4"   ,"2x3"   ],
        dmg:  ["55"     ,"170"   ,"90"    ],
        hp:   ["270"    ,"80"    ,"20"    ],
        dv:   ["4"      ,"2"     ,"7"     ],
        da:   ["2-7,3"  ,"1-12,5","1-25,3"],
        buy:  ["200"    ,"150"   ,"100"   ],
        rev:  ["160"    ,"95"    ,"80"    ],
        src:  ["тг5"    ,"кв-2"  ,"zis-30"]
    }
}

/*functions*/{
    function add_main() {
        if (input_1.value!="" && input_2.value!="" && input_3.value!="" && input_4.value!="" && input_5.value!="" && input_6.value!="" && input_7.value!="" && input_8.value!="") {
            all_units.names[all_units.names.length]=input_1.value
            all_units.size [all_units.size .length]=input_2.value
            all_units.dmg  [all_units.dmg  .length]=input_3.value
            all_units.hp   [all_units.hp   .length]=input_4.value
            all_units.dv   [all_units.dv   .length]=input_5.value
            all_units.da   [all_units.da   .length]=input_6.value
            all_units.buy  [all_units.buy  .length]=input_7.value
            all_units.rev  [all_units.rev  .length]=input_8.value

            input_1.value=""
            input_2.value=""
            input_3.value=""
            input_4.value=""
            input_5.value=""
            input_6.value=""
            input_7.value=""
            input_8.value=""

        }else{
            alert("Вы не всё ввели, сударь!")
        }
    }
    function end_main() {
        var sure=confirm("Вы уверены? Вы не сможете восстановить прогресс!")
        if (sure=true) {
            var text_main=`var all_units={<br>
                names:[`;
                for (let index = 0; index < all_units.names.length; index++) {
                    text_main+=`"${all_units.names[index]}",`;

                }
                text_main+=`],<br>size: [`
                for (let index = 0; index < all_units.size.length; index++) {
                    text_main+=`"${all_units.size[index]}",`;

                }
                text_main+=`],<br>dmg: [`
                for (let index = 0; index < all_units.dmg.length; index++) {
                    text_main+=`"${all_units.dmg[index]}",`;

                }
                text_main+=`],<br>hp: [`
                for (let index = 0; index < all_units.hp.length; index++) {
                    text_main+=`"${all_units.hp[index]}",`;

                }
                text_main+=`],<br>dv: [`
                for (let index = 0; index < all_units.dv.length; index++) {
                    text_main+=`"${all_units.dv[index]}",`;

                }
                text_main+=`],<br>da: [`
                for (let index = 0; index < all_units.da.length; index++) {
                    text_main+=`"${all_units.da[index]}",`;

                }
                text_main+=`],<br>buy: [`
                for (let index = 0; index < all_units.buy.length; index++) {
                    text_main+=`"${all_units.buy[index]}",`;

                }
                text_main+=`],<br>rev: [`
                for (let index = 0; index < all_units.rev.length; index++) {
                    text_main+=`"${all_units.rev[index]}",`;

                }
                text_main+=`]<br>}`



                isjf.innerHTML=text_main
                
        }
    }
}

/*onload*/{

}
