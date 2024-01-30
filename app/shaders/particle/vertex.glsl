varying vec2 vUv;
uniform sampler2D uPositions;
varying vec4 vColor;
uniform float time;

void main(){
    vUv=uv;
    
    vec4 pos=texture2D(uPositions,uv);
    float angle=atan(pos.y,pos.x);
    vColor=vec4(.5+.08*sin(angle+time))*2.;
    
    vec4 mvPosition=modelViewMatrix*vec4(pos.xyz,1.);
    gl_PointSize=4.*(1./-mvPosition.z);
    gl_Position=projectionMatrix*mvPosition;
}