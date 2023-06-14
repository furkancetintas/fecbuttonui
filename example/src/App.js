import React, { useState } from 'react'

import { Button } from 'fecbuttonui'
import 'fecbuttonui/dist/index.css'
import Header from './Header'

const App = () => {
  const [more, setMore] = useState(false)
  return (
    <>
      <Header />
      <div className='flex align-center justify-center flex-col my-16'>
        <div className='justify-center align-center'>
          <div className='flex container'>
            <span>
              <strong>Color Names:</strong> default, alternative, dark, light,
              green, purple, red, yellow
            </span>
          </div>
          <div className='flex container'></div>
        </div>
        <div className='justify-center align-center'>
          <h4>Default Buttons</h4>
          <span>type='btn-colorName'</span>
          <div className='flex container'>
            <div>
              <Button text='Default' type='btn-default' />
            </div>
            <div>
              <Button text='Alternative' type='btn-alternative' />
            </div>
            <div>
              <Button text='Dark' type='btn-dark' />
            </div>
            <div>
              <Button text='Light' type='btn-light' />
            </div>
            <div>
              <Button text='Green' type='btn-green' />
            </div>
            <div>
              <Button text='Purple' type='btn-purple' />
            </div>
            <div>
              <Button text='Red' type='btn-red' />
            </div>
            <div>
              <Button text='Yellow' type='btn-yellow' />
            </div>
            <div>
              <Button text='Disabled' type='btn-disabled' aria-disabled />
            </div>
          </div>
        </div>
        <div className='justify-center align-center'>
          <h4>Outline Buttons</h4>
          <span>type='btn-colorName-outline'</span>
          <div className='flex container'>
            <div>
              <Button text='Default' type='btn-default-outline' />
            </div>
            <div>
              <Button text='Dark' type='btn-dark-outline' />
            </div>
            <div>
              <Button text='Green' type='btn-green-outline' />
            </div>
            <div>
              <Button text='Purple' type='btn-purple-outline' />
            </div>
            <div>
              <Button text='Red' type='btn-red-outline' />
            </div>
            <div>
              <Button text='Yellow' type='btn-yellow-outline' />
            </div>
          </div>
        </div>
        <div className='justify-center align-center'>
          <h4>Default Rounded Buttons</h4>
          <span>type='btn-colorName-rounded'</span>
          <div className='flex container'>
            <div>
              <Button text='Default' type='btn-default-rounded' />
            </div>
            <div>
              <Button text='Alternative' type='btn-alternative-rounded' />
            </div>
            <div>
              <Button text='Dark' type='btn-dark-rounded' />
            </div>
            <div>
              <Button text='Light' type='btn-light-rounded' />
            </div>
            <div>
              <Button text='Green' type='btn-green-rounded' />
            </div>
            <div>
              <Button text='Purple' type='btn-purple-rounded' />
            </div>
            <div>
              <Button text='Red' type='btn-red-rounded' />
            </div>
            <div>
              <Button text='Yellow' type='btn-yellow-rounded' />
            </div>
          </div>
        </div>
        <div className='justify-center align-center'>
          <h4>Outline Rounded Buttons</h4>
          <span>type='btn-colorName-outline-rounded'</span>
          <div className='flex container'>
            <div>
              <Button text='Default' type='btn-default-outline-rounded' />
            </div>
            <div>
              <Button text='Dark' type='btn-dark-outline-rounded' />
            </div>
            <div>
              <Button text='Green' type='btn-green-outline-rounded' />
            </div>
            <div>
              <Button text='Purple' type='btn-purple-outline-rounded' />
            </div>
            <div>
              <Button text='Red' type='btn-red-outline-rounded' />
            </div>
            <div>
              <Button text='Yellow' type='btn-yellow-outline-rounded' />
            </div>
          </div>
        </div>
        <div className='justify-center align-center'>
          <h4>Dashed Buttons</h4>
          <span>type='btn-colorName-dashed'</span>
          <div className='flex container'>
            <div>
              <Button text='Default' type='btn-default-dashed' />
            </div>
            <div>
              <Button text='Alternative' type='btn-alternative-dashed' />
            </div>
            <div>
              <Button text='Dark' type='btn-dark-dashed' />
            </div>
            <div>
              <Button text='Light' type='btn-light-dashed' />
            </div>
            <div>
              <Button text='Green' type='btn-green-dashed' />
            </div>
            <div>
              <Button text='Purple' type='btn-purple-dashed' />
            </div>
            <div>
              <Button text='Red' type='btn-red-dashed' />
            </div>
            <div>
              <Button text='Yellow' type='btn-yellow-dashed' />
            </div>
          </div>
        </div>
        <div className='justify-center align-center'>
          <h4>Button sizes</h4>
          <span>type='btn-colorName-extra-small'</span>
          <div className='flex container'>
            <div>
              <Button text='Extra small' type='btn-default-extra-small' />
            </div>
            <div>
              <Button text='Small' type='btn-default-small' />
            </div>
            <div>
              <Button text='Base' type='btn-default-base' />
            </div>
            <div>
              <Button text='Large' type='btn-default-large' />
            </div>
            <div>
              <Button text='Extra large' type='btn-default-extra-large' />
            </div>
          </div>
          {more && (
            <>
              <div className='flex container'>
                <div>
                  <Button
                    text='Extra small'
                    type='btn-alternative-extra-small'
                  />
                </div>
                <div>
                  <Button text='Small' type='btn-alternative-small' />
                </div>
                <div>
                  <Button text='Base' type='btn-alternative-base' />
                </div>
                <div>
                  <Button text='Large' type='btn-alternative-large' />
                </div>
                <div>
                  <Button
                    text='Extra large'
                    type='btn-alternative-extra-large'
                  />
                </div>
              </div>
              <div className='flex container'>
                <div>
                  <Button text='Extra small' type='btn-dark-extra-small' />
                </div>
                <div>
                  <Button text='Small' type='btn-dark-small' />
                </div>
                <div>
                  <Button text='Base' type='btn-dark-base' />
                </div>
                <div>
                  <Button text='Large' type='btn-dark-large' />
                </div>
                <div>
                  <Button text='Extra large' type='btn-dark-extra-large' />
                </div>
              </div>
              <div className='flex container'>
                <div>
                  <Button text='Extra small' type='btn-light-extra-small' />
                </div>
                <div>
                  <Button text='Small' type='btn-light-small' />
                </div>
                <div>
                  <Button text='Base' type='btn-light-base' />
                </div>
                <div>
                  <Button text='Large' type='btn-light-large' />
                </div>
                <div>
                  <Button text='Extra large' type='btn-light-extra-large' />
                </div>
              </div>
              <div className='flex container'>
                <div>
                  <Button text='Extra small' type='btn-green-extra-small' />
                </div>
                <div>
                  <Button text='Small' type='btn-green-small' />
                </div>
                <div>
                  <Button text='Base' type='btn-green-base' />
                </div>
                <div>
                  <Button text='Large' type='btn-green-large' />
                </div>
                <div>
                  <Button text='Extra large' type='btn-green-extra-large' />
                </div>
              </div>
              <div className='flex container'>
                <div>
                  <Button text='Extra small' type='btn-purple-extra-small' />
                </div>
                <div>
                  <Button text='Small' type='btn-purple-small' />
                </div>
                <div>
                  <Button text='Base' type='btn-purple-base' />
                </div>
                <div>
                  <Button text='Large' type='btn-purple-large' />
                </div>
                <div>
                  <Button text='Extra large' type='btn-purple-extra-large' />
                </div>
              </div>
              <div className='flex container'>
                <div>
                  <Button text='Extra small' type='btn-red-extra-small' />
                </div>
                <div>
                  <Button text='Small' type='btn-red-small' />
                </div>
                <div>
                  <Button text='Base' type='btn-red-base' />
                </div>
                <div>
                  <Button text='Large' type='btn-red-large' />
                </div>
                <div>
                  <Button text='Extra large' type='btn-red-extra-large' />
                </div>
              </div>
              <div className='flex container'>
                <div>
                  <Button text='Extra small' type='btn-yellow-extra-small' />
                </div>
                <div>
                  <Button text='Small' type='btn-yellow-small' />
                </div>
                <div>
                  <Button text='Base' type='btn-yellow-base' />
                </div>
                <div>
                  <Button text='Large' type='btn-yellow-large' />
                </div>
                <div>
                  <Button text='Extra large' type='btn-yellow-extra-large' />
                </div>
              </div>
            </>
          )}
          <div className='flex container'>
            <button onClick={() => setMore(!more)}>
              {more ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
