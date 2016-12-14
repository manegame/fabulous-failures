'use strict'
var Vue = require('vue')
// var socket = require('socket.io-client')('http://54.67.113.43:8080')
// var socket = require('socket.io-client')('http://127.0.0.1:8080')
var socket = require('socket.io-client')('http://192.168.0.65:8080')

var screen = new Vue({
  el: '#screen',
  data: {
    screenOne: {
      url: '',
      classObject: {
        active: true,
        close: false,
        'zoom-12': false,
        'zoom-14': false,
        'zoom-16': false,
        'zoom-18': false,
        'zoom-20': false,
        'pan-0-0': false,
        'pan-0-20': false,
        'pan-0-40': false,
        'pan-0-60': false,
        'pan-0-80': false,
        'pan-0-100': false,
        'pan-20-0': false,
        'pan-20-20': false,
        'pan-20-40': false,
        'pan-20-60': false,
        'pan-20-80': false,
        'pan-20-10-': false,
        'pan-40--0': false,
        'pan-40-20': false,
        'pan-40-40': false,
        'pan-40-60': false,
        'pan-40-80': false,
        'pan-40-100': false,
        'pan-60-0': false,
        'pan-60-20': false,
        'pan-60-40': false,
        'pan-60-60': false,
        'pan-60-80': false,
        'pan-60-100': false,
        'pan-80-0': false,
        'pan-80-20': false,
        'pan-80-40': false,
        'pan-80-60': false,
        'pan-80-80': false,
        'pan-80-100': false,
        'pan-100-0': false,
        'pan-100-20': false,
        'pan-100-40': false,
        'pan-100-60': false,
        'pan-100-80': false,
        'pan-100-100': false
      }
    },
    screenTwo: {
      url: '',
      classObject: {
        active: true,
        close: true,
        pan: true,
        'zoom-12': false,
        'zoom-14': false,
        'zoom-16': false,
        'zoom-18': false,
        'zoom-20': false,
        'pan-0-0': false,
        'pan-0-20': false,
        'pan-0-40': false,
        'pan-0-60': false,
        'pan-0-80': false,
        'pan-0-100': false,
        'pan-20-0': false,
        'pan-20-20': false,
        'pan-20-40': false,
        'pan-20-60': false,
        'pan-20-80': false,
        'pan-20-10-': false,
        'pan-40--0': false,
        'pan-40-20': false,
        'pan-40-40': false,
        'pan-40-60': false,
        'pan-40-80': false,
        'pan-40-100': false,
        'pan-60-0': false,
        'pan-60-20': false,
        'pan-60-40': false,
        'pan-60-60': false,
        'pan-60-80': false,
        'pan-60-100': false,
        'pan-80-0': false,
        'pan-80-20': false,
        'pan-80-40': false,
        'pan-80-60': false,
        'pan-80-80': false,
        'pan-80-100': false,
        'pan-100-0': false,
        'pan-100-20': false,
        'pan-100-40': false,
        'pan-100-60': false,
        'pan-100-80': false,
        'pan-100-100': false
      }
    }
  }
})

socket.on('init', function (data) {
  console.log('connected')
  screen.screenOne.url = data.screenOne.url
  screen.screenTwo.url = data.screenTwo.url
  setTimeout(function(){
    console.log(Date.now(), 'fade')
    screen.screenOne.classObject = data.screenOne.classObject
    screen.screenTwo.classObject = data.screenTwo.classObject
  }, 4000)
})

socket.on('state', function (data) {
  console.log(Date.now(), 'Broadcast received', data)
  if(data.xcut) {
    console.log(Date.now(), 'xcut')
    screen.screenOne.url = data.screenOne.url
    screen.screenTwo.url = data.screenTwo.url
    setTimeout(function(){
      console.log(Date.now(), 'fade')
      screen.screenOne.classObject.active = data.screenOne.classObject.active
      screen.screenTwo.classObject.active = data.screenTwo.classObject.active
    }, 4000)
  } else {
    screen.screenOne = data.screenOne
    screen.screenTwo = data.screenTwo
  }
})
