excersie:
https://github.com/johnny5550822/Ho-UFLDL-tutorial
Autoencoder:
http://blog.csdn.net/u012816943/article/details/50514771



cp -a .build_release/lib/. /usr/local/lib/

cmake .. -DCMAKE_CXX_FLAGS=-I/usr/local/opt/openblas/include

export PATH=/Developer/NVIDIA/CUDA-7.5/bin:$PATH
export DYLD_LIBRARY_PATH=/Developer/NVIDIA/CUDA-7.5/lib:$DYLD_LIBRARY_PATH


PATH="/Applications/CMake.app/Contents/bin":"$PATH"

or x in snappy leveldb gflags glog szip hdf5 lmdb homebrew/science/opencv;
do
brew uninstall $x;
brew install --fresh -vd $x;
done
brew uninstall --force protobuf; brew install --with-python --fresh -vd protobuf
brew uninstall boost boost-python; brew install --fresh -vd boost boost-python

export HDF5_DISABLE_VERSION_CHECK=2
echo $PYTHONPATH

export PYTHONPATH=/User/empzxb/Documnet/caffe/distribute/python/caffe:$PYTHONPATH

import sys
sys.path.insert(0,"/Users/empzxb/Documents/caffe/distribute/python")

export DYLD_FALLBACK_LIBRARY_PATH=/usr/local/cuda/lib:/usr/local/lib:/usr/lib:/Developer/NVIDIA/CUDA-7.5/lib:/Users/empzxb/anaconda2/lib/


sudo ln -s
sudo find / -name "libcaffe.so"

export PYTHONPATH=/usr/local/lib/python2.7/site-packages:$PYTHONPATH


#set the caffe lib
export PYTHONPATH=path/to/caffe/python:$PYTHONPATH
export DYLD_FALLBACK_LIBRARY_PATH=/usr/local/cuda/lib:/usr/local/lib:/usr/lib
export DYLD_FALLBACK_LIBRARY_PATH=/usr/local/cuda/lib:/usr/local/lib:/usr/lib:/Developer/NVIDIA/CUDA-7.5/lib:/Users/empzxb/anaconda2/lib/

export PATH="/usr/local/git/bin:$PATH"
vim ~/.bash_profile 

cd System/Library/Frameworks/
sudo ln -s  Python.framework_backup Python.framework

//DeepDream:
ipython notebook
export PYTHONPATH=/Users/empzxb/Documents/Deep_Learning/caffe/python/:$PYTHONPATH


xattr -rc /Users/empzxb/Documents/testNewIOS

export KERAS_BACKEND=tensorflow

source deactivate py3

export KERAS_BACKEND=tensorflow


mlagents-learn config/trainer_config.yaml --curriculum=curricula/wall-jump/ --run-id=wall-jump-curriculum --train


/Users/empzxb/Documents/Deep_Learning/ml-agents/ml-agents/mlagents/trainers
sudo mlagents-learn ../../../config/trainer_config.yaml --env=../../../python/firstAItemp.app --run-id=3dBall --train



export LD_LIBRARY_PATH=/usr/local/lib:$LD_LIBRARY_PATH





#pragma arguments

float revealage;
texture2d<float, access::sample> noiseTexture;


#pragma transparent
#pragma body

const float edgeWidth = 0.02;
const float edgeBrightness = 2;
const float3 innerColor = float3(0.4, 0.8, 1);
const float3 outerColor = float3(0, 0.5, 1);
const float noiseScale = 3;







constexpr sampler noiseSampler(filter::linear, address::repeat);
float2 noiseCoords = noiseScale * _surface.ambientTexcoord;
float noiseValue = noiseTexture.sample(noiseSampler, noiseCoords).r;

if (noiseValue > revealage) {
    discard_fragment();
}

float edgeDist = revealage - noiseValue;
if (edgeDist < edgeWidth) {
    float t = edgeDist / edgeWidth;
    float3 edgeColor = edgeBrightness * mix(outerColor, innerColor, t);
    _output.color.rgb = edgeColor;
}

if (revealage ==1)
{
    _output.color.rgb = float3(1.0, 1.0, 1.0);
}



export PATH=/Users/empzxb/Documents/deepLearning/flutter/bin:$PATH
export FLUTTER_ROOT=/Users/empzxb/Documents/deepLearning/flutter

export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn



作者：Future_sen
链接：https://www.jianshu.com/p/10237bf13789
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

export PATH="$PATH:/Users/empzxb/Documents/webApp/flutter/bin"
flutter run -d chrome

ack  "SinglePost" .

# SEE the PORT
sudo lsof -i -P -n | grep LISTEN
sudo setsid npm start

sudo npm install -g forever
forever start server.js
forever stop server.js
forever list
forever start index.js
 
 
 # download
docker pull ubuntu:18.04
# info
docker ps
docker images
docker container ls
# running
docker run -d -t --name react-server ubuntu:18.04
docker exec -it react-app bash
docker stop react-serverbash


# upload, push
docker tag a213f63c74bf herozxb/react-app:second 
docker push herozxb/react-app

# update, Port
docker stop packager2
docker commit packager2 packager3
docker run -d -p 3000:80 --restart=always --name packager4 packager3

 
aa164384cd4f

docker run -t -d -p 80:80 -p 5000:5000 -p 2001:2001  --name react-app herozxb/react-app:firstTry

docker run -t -d -p 80:80 -p 5000:5000 -p 2001:2001   react-app2:latest
docker exec -it gracious_beaver bash

# pull, run, start react docker image
docker pull herozxb/react-app:second
docker run -t -d -p 80:80 -p 5000:5000 -p 2001:2001 --name react-app herozxb/react-app:second
docker exec -it react-app bash
forever index.js
sudo setsid npm start


ffmpeg -re -i ./t.mp4 -vcodec copy -loop -1 -c:a aac -b:a 160k -ar 44100 -strict -2 -f flv rtmp:149.28.225.48/live/bbb
ffmpeg -re -i ./t.mp4 -vcodec libx264 -vprofile baseline -g 30 -acodec aac -strict -2 -f flv rtmp:149.28.225.48/live/bbb

# success streaming at china
ffmpeg -re -i ./t.mp4 -vcodec copy -loop -1 -c:a aac -b:a 160k -ar 44100 -strict -2 -f flv -flvflags no_duration_filesize rtmp:120.53.220.237/live/bbb
rtmp://120.53.220.237/live/bbb
http://120.53.220.237:8080/hls/bbb.m3u8
http://120.53.220.237:8080/dash/bbb.mpd

# success streaming at us
ffmpeg -re -i ./t.mp4 -vcodec copy -loop -1 -c:a aac -b:a 160k -ar 44100 -strict -2 -f flv -flvflags no_duration_filesize rtmp:149.28.225.48/live/bbb
ffmpeg -re -i ./t.mp4 -vcodec libx264 -vprofile baseline -g 30 -acodec aac -strict -2 -f flv -flvflags no_duration_filesize rtmp:149.28.225.48/live/bbb
rtmp://149.28.225.48/live/bbb
http://149.28.225.48:8080/hls/bbb.m3u8
http://149.28.225.48:8080/dash/bbb.mpd


sudo /usr/local/nginx/sbin/nginx -s reload

# SEE the PORT
sudo lsof -i -P -n | grep LISTEN

