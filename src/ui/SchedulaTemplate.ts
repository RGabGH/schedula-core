
export class SchedulaTemplate {
    public svgString = ` 
    
    <svg 
    
            xmlns='http://www.w3.org/2000/svg' 
            id="main-svg" viewBox="0 0 1000 1000"
            version="1.1" 
           
          
            
         
            > 
            <pattern id="pattern-chevron" x="0" y="0" patternUnits="objectBoundingBox" width="100" height="180" viewBox="0 0 10 18"> 
         
           
            <g id="chevron">
            
              <path class="left" d="M0 0l5 3v5l-5 -3z"></path>
              <path class="right" d="M10 0l-5 3v5l5 -3"></path>
            </g>
           
           
            <use x="0" y="9" xlink:href="#chevron"></use>
          
          </pattern>
          <pattern id="progress-pattern" x="0" y="0" width="50" height="140" patternUnits="userSpaceOnUse" >    
          <rect x="0" y="0" width="25" height="140" fill="black" opacity="0.4"/>
          <rect x="25" y="0" width="25" height="140" fill="white" opacity="0.4"/>
          <animateTransform attributeName="patternTransform" type="rotate" from="30" to="30" dur="4s" repeatCount="indefinite"/> 
          <animateTransform attributeName="patternTransform" type="translate" from="0" to="100" dur="4s" repeatCount="indefinite"  additive="sum"/>  
        </pattern>
          <pattern
        id="p_circles"
        x=".125"
        y=".125"
        width=".25"
        height=".25"
        patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="10" />
      </pattern>
      <pattern id="obliqueLines"
      x="0" y="0" width="6" height="6"
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)">
    <rect x="0" y="0" width="6" height="2.5" style="stroke: 0; fill: currentColor" />

    </pattern>
            <animate id="vanim" attributeName="viewBox" 
                to="" 
                from="" 
                dur="0.3s" 
                fill="freeze" 
                repeatCount="1" 
                begin="indefinite"/> 
    
            <defs id="defs" > 
                <marker id="circle-marker-end" markerWidth="8" markerHeight="8" refX="5" class="marker-end" refY="5" orient="auto">
                    <circle class="link-wire-marker-end" cx="5" cy="5" r="2"></circle>
                </marker>
    
                <linearGradient id="gradV1" x1="0%" y1="0%" x2="0%" y2="100%"> 
                    <stop class="grad-color1" offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:0.8" /> 
                    <stop class="grad-color2" offset="100%" style="stop-color:rgb(123, 175, 196);stop-opacity:0.8" /> 
                
                </linearGradient> 
               <linearGradient id="gradH1" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop  class="grad-color1" offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:0.8" />
                   <stop  class="grad-color2" offset="100%" style="stop-color:rgb(123, 175, 196);stop-opacity:0.8" />
    
                </linearGradient>
    
                
                <g id="stars" transform="scale(0.7)">
                    <path
                       transform="rotate(16.166027,247.23984,-34.317252)"
                        d="m 27.606898,72.838594 -2.767323,-1.003493 -1.799362,2.329673 0.09923,-2.941977 -2.771683,-0.991386 2.82865,-0.81475 0.08637,-2.942383 1.648974,2.438435 2.825061,-0.827107 -1.809528,2.321785 z"
                        id="path817"
                        style="opacity:0.678;fill:#d9be20;fill-opacity:1;stroke:none;stroke-width:0.30000001;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.59999999, 0.3;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill" />
                        <path
                        transform="rotate(16.166027,251.21746,-4.9164116)"
                        d="m 27.606898,72.838594 -2.767323,-1.003493 -1.799362,2.329673 0.09923,-2.941977 -2.771683,-0.991386 2.82865,-0.81475 0.08637,-2.942383 1.648974,2.438435 2.825061,-0.827107 -1.809528,2.321785 z"
                        id="path817-4"
                        style="opacity:0.678;fill:#d9be20;fill-opacity:1;stroke:none;stroke-width:0.30000001;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.59999999, 0.3;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill" />
                        <path
                        transform="rotate(16.166027,255.36117,24.260777)"
                        d="m 27.606898,72.838594 -2.767323,-1.003493 -1.799362,2.329673 0.09923,-2.941977 -2.771683,-0.991386 2.82865,-0.81475 0.08637,-2.942383 1.648974,2.438435 2.825061,-0.827107 -1.809528,2.321785 z"
                        id="path817-2"
                       style="opacity:0.678;fill:#d9be20;fill-opacity:1;stroke:none;stroke-width:0.30000001;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.59999999, 0.3;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill" />
                        <path
                        transform="rotate(16.166027,259.48588,53.211077)"
                        d="m 27.606898,72.838594 -2.767323,-1.003493 -1.799362,2.329673 0.09923,-2.941977 -2.771683,-0.991386 2.82865,-0.81475 0.08637,-2.942383 1.648974,2.438435 2.825061,-0.827107 -1.809528,2.321785 z"
                        id="path817-9"
                        style="opacity:0.678;fill:#d9be20;fill-opacity:1;stroke:none;stroke-width:0.30000001;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.59999999, 0.3;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill" />
                        <path
                        transform="rotate(16.166027,263.61059,82.161379)"
                        d="m 27.606898,72.838594 -2.767323,-1.003493 -1.799362,2.329673 0.09923,-2.941977 -2.771683,-0.991386 2.82865,-0.81475 0.08637,-2.942383 1.648974,2.438435 2.825061,-0.827107 -1.809528,2.321785 z"
                        id="path817-5"
                        style="opacity:0.678;fill:#d9be20;fill-opacity:1;stroke:none;stroke-width:0.30000001;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:0.59999999, 0.3;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers stroke fill" />
                </g>
                <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="4" height="4">
                            <path d="M-1,1 l2,-2
                                    M0,4 l4,-4
                                    M3,5 l2,-2" 
                                    style="stroke:#00ff00; stroke-width:0.7" fill="orange"/>
                </pattern>
            </defs>'
    
    
        <g id="wrapper" transform="translate(0,0)">
            <g  id="scheduler-items" left="0px" transform="translate(0,0)">
    
                <animateTransform  
                    xlink:href="#scheduler-items"
                    attributeName="transform" 
                    attributeType="XML"
                    type="translate"
                    from="0"
                    to="50"
                    dur="0.4s"
    
                    calcMode="spline"
                    keyTimes="0;1" 
                    keySplines=" .4 0 .6 1  " 
                    repeatCount="1"
                    begin="indefinite"
                    fill="freeze" />
    
    
                <g id="scheduler-header">
                
                </g>
                <g id="scheduler-background" transform="translate(0,0)">
                
                </g>
    
    
    
            </g>
            
        
        </g>
        <svg id="scheduler-sidebar" x="0" y="0" width="6000" height="100%" >
            <svg id="scheduler-resources" x="0" y="0" height="100%" width="calc(100% - 40px)">
            </svg>
            <svg id="scheduler-splitter" x="calc(100% - 80px)" y="0" width="80" height="100%" >
             
                <rect x="calc(100% - 45px)" y="0" width="10" height="100%" class="splitter" fill="white" style="cursor:ew-resize;"/>
               
          
            </svg>
        </svg>
      
    </svg>
    
    <svg id="shifter-dx" class="shifter svg-overlay right" style="visibility:hidden">
        <g transform="scale(4)">
            <circle  cx="8" cy="8" r="8" fill="white" ></circle>
            <path  d='M 3, 2 L 5,4 L 3, 6' stroke="#6699cc" fill="none" transform="scale(2)"/>
        </g>
    </svg>
    
    <svg id="shifter-sx" class="shifter svg-overlay left" style="visibility:hidden">
            
        <g transform="scale(4) rotate(180 8 8)">
            <circle  cx="8" cy="8" r="8" fill="white" ></circle>
            <path  d='M 3, 2 L 5,4 L 3, 6' stroke="#6699cc" fill="none" transform="scale(2)"/>
        </g>
    </svg>
    
    `;
}
