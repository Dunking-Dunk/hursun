varying vec2 vUv;
uniform float uTime;

vec3 hash(vec3 p)// replace this by something better
{
    p=vec3(dot(p,vec3(127.1,311.7,74.7)),
    dot(p,vec3(269.5,183.3,246.1)),
    dot(p,vec3(113.5,271.9,124.6)));
    
    return-1.+2.*fract(sin(p)*43758.5453123);
}
float noise(in vec3 p)
{
    vec3 i=floor(p);
    vec3 f=fract(p);
    
    vec3 u=f*f*(3.-2.*f);
    
    return mix(mix(mix(dot(hash(i+vec3(0.,0.,0.)),f-vec3(0.,0.,0.)),
    dot(hash(i+vec3(1.,0.,0.)),f-vec3(1.,0.,0.)),u.x),
    mix(dot(hash(i+vec3(0.,1.,0.)),f-vec3(0.,1.,0.)),
    dot(hash(i+vec3(1.,1.,0.)),f-vec3(1.,1.,0.)),u.x),u.y),
    mix(mix(dot(hash(i+vec3(0.,0.,1.)),f-vec3(0.,0.,1.)),
    dot(hash(i+vec3(1.,0.,1.)),f-vec3(1.,0.,1.)),u.x),
    mix(dot(hash(i+vec3(0.,1.,1.)),f-vec3(0.,1.,1.)),
    dot(hash(i+vec3(1.,1.,1.)),f-vec3(1.,1.,1.)),u.x),u.y),u.z);
}

void main(){
    vec2 uv=vUv;
    vec3 stars_direction=normalize(vec3(uv*2.f-1.f,1.f));// could be view vector for example
    float stars_threshold=6.f;// modifies the number of stars that are visible
    float stars_exposure=30.f;// modifies the overall strength of the stars
    float stars=pow(clamp(noise(stars_direction*200.f),0.f,1.f),stars_threshold)*stars_exposure;
    stars*=mix(.4,1.4,noise(stars_direction*100.f+vec3(uTime)));// time based flickering
    
    // Output to screen
    gl_FragColor=vec4(vec3(stars),1.);
}