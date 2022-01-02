import React, {useContext} from "react";
import ExpenseTotal from "../mainScreen/ExpenseTotal";
import EChartsReact from "echarts-for-react";
import {categoryService} from "../../service/categoryService.tsx";

const ChartScreen = () => {

    const {transactions, categories} = useContext(categoryService);

    const dataMap = new Map();

    transactions.forEach(el => {
        let catKey = categories.filter(obj => {
            return obj.id === el.category;
        })[0].label;
        if (dataMap.has(catKey)) {
            let val = dataMap.get(catKey) + Math.abs(el.amount);
            dataMap.set(catKey, val);
        } else {
            dataMap.set(catKey, Math.abs(el.amount));
        }
    });


    let dataArr = Array.from(dataMap, ([key, value]) => ({key, value}));
    const transfData = dataArr.map(({key, value}) => ({
        name: key,
        value: value
    }));

    console.log(transfData);
    const option = {
        title: {
            text: 'Total spends by category',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                type: 'pie',
                radius: '50%',
                data: transfData,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    return (
        <div>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <ExpenseTotal/>
                </div>
            </div>
            <div>
                <EChartsReact option={option}/>
            </div>
        </div>
    );
};

export default ChartScreen;
