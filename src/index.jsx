import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { StrictMode } from 'react'
import { Suspense } from 'react'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <Canvas
            camera={{ position: [0, 2, 15], fov: 30 }}
            shadows={true}
        >
            <Suspense>
                <Experience />
            </Suspense>
        </Canvas>

    </StrictMode>
)