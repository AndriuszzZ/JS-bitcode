import { Component } from "./Component.js"
import { Form } from "./Form.js"
import { Input } from "./Input.js"
import { Label } from "./Label.js"

const title = new Component('h1', 'body', { innerText: 'Olá Mundo!'})

console.log(title)
title.render()

title.tag = 'h3'

title.build().render()

const form = new Form('body')

const label = new Label('Nome:', form, { htmlFor: 'nomeImput'})
const input = new Input(form, { id: 'nameImput', name: 'nome'})

form.render()
label.render()

form.addChildren(input)

form.addChildren(
    new Component('br'),
    new Component('br'),
    new Label('Data de nascimento:', form, { htmlFor: 'birthdayImput'}),
    new Input(form, { id: 'birthdayImput', name: 'birthday', type: 'date'})
)

