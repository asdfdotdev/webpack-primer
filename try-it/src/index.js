/**
 * Vanilla JS
 */
import './vanilla/javascript'

/**
 * jQuery Plugin
 */
import './jquery/make-plugin'
import './jquery/use-plugin'

/**
 * React Component
 */
import React, { Fragment } from "react"
import { render } from "react-dom"
import ReactApp from "./react/component"

render(<ReactApp />, document.querySelector("#red_div"))

/**
 * Vue Component
 */
import Vue from 'vue'
import VueApp from './vue/component.vue'

new Vue({
    el: '#vue_div',
    render: h => h(VueApp)
})