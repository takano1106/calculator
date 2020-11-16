var input = ''; //入力した値
var total = 0; //合計
var kigo = '+'; //演算子(初期値を+にしておかないと演算子が空のままで最初の計算で躓く)
var flag = 0; //１回前に入力したものが 0:数字 1:演算子
var dot = 0; //小数点が入力されているか 0:されてない 1:されてる
var first = 0; //最初にボタンが押されたか 0:初めて 1:初めてじゃない


function viwe(data){
    flag = 0;  //数字または少数点を押下してディスプレイに表示する関数
    if(data === '.'){　//小数点が押された場合
        if(dot == 0 && first == 1){　//小数点が押されていない+最初に押されたボタンではない場合
            input += data;　//ボタンの値が入力した値に+されていく
            document.frm.display.value = input;　//入力された値がディスプレイに表示される
            dot = 1; //小数点が押された
        }else if(dot == 0 && first == 0){　//少数点が押されていない+最初に押した場合
            input = total + data;　//合計(0)に小数点を足して0.を入力した値に入れる
            document.frm.display.value = input;　//入力された値がディスプレイに表示される
            first = 1;　//最初にボタンが押された
            dot = 1;　//少数点が押された
        }else if(dot == 1){　//小数点がすでに押されている場合
            return;　//なにもしない
        }
    }else if(data !== 0){　//0以外の数字が押された場合
        input += data;　//ボタンの値が入力した値に+されていく
        document.frm.display.value = input;　//入力された値がディスプレイに表示される
        first = 1; //ボタンが押された
    }else if(data === 0){　//ボタン0が押された場合
        var zero = document.frm.display.value.slice(0 , 1);　//ディスプレイに表示されている先頭の文字をzeroに代入
        if(zero === '0' && first == 0){　//先頭の文字が0で最初に押下した場合
            return;　//なにもしない
        }else if(zero !== '0' || dot == 1){　//先頭の文字が0でなく、小数点が押されている場合
            input += data;　//ボタンの値が入力した値に+されていく
            document.frm.display.value = input;  //入力された値がディスプレイに表示される
        }
    }
}



function enzan(data){　//[+] [-] [*] [/] [=]を押したときに計算を行う関数
    if (flag == 0){　//1回前に入力したのが数字の場合
        flag = 1;　//演算子を入力した
        keisan = total + kigo + input;　//合計+演算子+入力した値の式を作る
        total = eval(keisan);　//evalで計算を行う
        input = '';　//入力した物を初期化
        document.frm.display.value = total;	// 合計を表示
    }
    if (data == '='){ //「＝」を押した場合
        total = 0;	
    }else{	//「＝」以外の場合
        kigo = data;　//演算子を一時保存
    }
}

function del(){ //Cボタン押した時にすべて初期化する関数
    input = '';
    total = 0;
    kigo = '+';
    flag = 0;
    dot = 0;
    first = 0;
    document.frm.display.value = 0;
}	