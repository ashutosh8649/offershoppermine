import { TestBed, inject, async, getTestBed, ComponentFixture } from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {HttpModule, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Headers, BaseRequestOptions,Response,Http, XHRBackend, RequestMethod} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { UpdatePasswordService } from './update-password.service';

xdescribe('UpdatePasswordService', () => {
let mockBackend: MockBackend;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [UpdatePasswordService,
      MockBackend,
      BaseRequestOptions,
      {
        provide: Http,
        deps: [MockBackend, BaseRequestOptions],
        useFactory:
        (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }
      }],
      imports : [HttpClientModule,HttpModule],
    });
    mockBackend = getTestBed().get(MockBackend);

  });


  it('should be created', inject([UpdatePasswordService], (service: UpdatePasswordService) => {
    expect(service).toBeTruthy();
  }));

  it('should have updatePassWithEmail function', inject([UpdatePasswordService], (service: UpdatePasswordService) => {
    expect(service.updatePassWithEmail).toBeTruthy();
  }));
});
