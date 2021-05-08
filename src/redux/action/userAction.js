import {createAction} from '@reduxjs/toolkit'

const userAction = createAction('user')
userAction({text:'USER'})