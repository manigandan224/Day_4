let s_list=["rice","wheat","oil"];
console.log("shopping list: "+s_list);
let extra_items=[];
for (let i of s_list){
    extra_items.push(i);
}
let new_product=String(prompt("enter another items"));
extra_items.push(new_product);
console.log(extra_items);
