import React from 'react'
import { Col } from 'react-bootstrap'

export const Pay = () =>{
    return(
        <dev className="mr-auto">
            <Col classNmae="list-unstyled">
            <h1 className="text-center m-5" >Оплата</h1>
            <h6 className="text-center m-3">*При заказе на любую сумму необходимо внести предоплату 50% от суммы заказа, на карту ПриватБанка, после согласования всех деталей заказа.</h6>
            <h6 className="text-center m-3"> **При заказе торта или сладостей в подарок другому человеку /компании — предоплата 100% на карту ПриватБанка.</h6>
            <h6 className="text-center m-3">***При отказе от заказа позже, чем за 3 дня до заявленной даты доставки или самовывоза, предоплата не возвращается .</h6>
            <h6 className="text-center m-6">  ****Оплатить Ваш заказ полностью Вы можете наличными при самовывозе или курьеру при доставке.</h6>
            </Col>
        </dev>
    )
}
