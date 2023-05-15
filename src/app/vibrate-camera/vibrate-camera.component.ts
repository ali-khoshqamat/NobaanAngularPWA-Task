import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-vibrate-camera',
  templateUrl: './vibrate-camera.component.html',
  // declarations: [VibrateCameraC],
})
export class VibrateCameraComponent implements OnInit {
  mediaStream: MediaStream | null = null;
  capturedImage: string | null = null;
  @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  isShow = false;

  ngOnInit() {
    this.requestMediaStream();
  }

  handleVibrate() {
    navigator.vibrate([200, 100, 200]);
  }

  async requestMediaStream() {
    try {
      const constraints: MediaStreamConstraints = { audio: true, video: true };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.mediaStream = stream;
      if (this.videoRef) {
        this.videoRef.nativeElement.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing media devices', error);
    }
  }

  startHandler() {
    try {
      this.requestMediaStream();
    } catch (error) {
      console.error('Error accessing media devices', error);
    }
  }

  stopHandler() {
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((track) => track.stop());
      this.mediaStream = null;
    }
  }

  toggleCamera() {
    this.isShow = !this.isShow;
    if (this.isShow) {
      this.startHandler();
    } else {
      this.stopHandler();
    }
  }

  captureImageHandler() {
    if (this.canvasRef && this.videoRef) {
      const canvas = this.canvasRef.nativeElement;
      const video = this.videoRef.nativeElement;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const context = canvas.getContext('2d');

      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        this.capturedImage = canvas.toDataURL('image/png');
      }
    }
  }
}
