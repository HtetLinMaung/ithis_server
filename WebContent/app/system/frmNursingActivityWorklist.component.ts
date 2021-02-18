import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { enableProdMode } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { RpIntercomService } from "../framework/rp-intercom.service";
import { RpHttpService } from "../framework/rp-http.service";
import { RpBean } from "../framework/rp-bean";
import { RpReferences } from "../framework/rp-references";
import { ClientUtil } from "../util/rp-client.util";
import { RendererCallback } from "../util/interfaces";
import { Certificate } from "crypto";

declare var jQuery: any;
declare const fetch: any;
declare const moment: any;
enableProdMode();
@Component({
  selector: "frm-nursing-activity-worklist",
  template: `
    <table id="export_table" style="display: none;">
      <tr>
        <td colspan="8">Nurse Activity WorkList</td>
      </tr>
      <tr>
        <th rowspan="2">PROCEDURE</th>
        <th>Date</th>
        <th>Date</th>
        <th>Date</th>
        <th>Date</th>
        <th>Date</th>
        <th>Date</th>
        <th>Date</th>
      </tr>
      <tr>
        <th>Due Date For Change Remove</th>
        <th>Due Date For Change Remove</th>
        <th>Due Date For Change Remove</th>
        <th>Due Date For Change Remove</th>
        <th>Due Date For Change Remove</th>
        <th>Due Date For Change Remove</th>
        <th>Due Date For Change Remove</th>
      </tr>
      <tr>
        <td colspan="8"></td>
      </tr>

      <tr>
        <td rowspan="2">Endotracheal Tube</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>asd</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Size:</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Marking:</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>External Length:</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="8"></td>
      </tr>

      <tr>
        <td rowspan="2">Tracheostomy Tube</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Size:</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Marking:</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="8"></td>
      </tr>

      <tr>
        <td rowspan="2">Chest Tube</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Site:</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Size:</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="8"></td>
      </tr>

      <tr>
        <td rowspan="2">Arterial Line</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Site:</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="8"></td>
      </tr>

      <tr>
        <td rowspan="2">Pacing Wire</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Site:</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="8"></td>
      </tr>

      <tr>
        <td rowspan="2">General Venous Catheter</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Site:</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="8"></td>
      </tr>

      <tr>
        <td rowspan="2">Peripheral IV Cannula</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Site & Size:</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="8"></td>
      </tr>

      <tr>
        <td rowspan="2">Vascular Catheter</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Site:</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="8"></td>
      </tr>

      <tr>
        <td rowspan="2">Urinary Catheter</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Size:</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="8"></td>
      </tr>

      <tr>
        <td rowspan="2">Nasogastric Tube</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Size:</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>Length:</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="8"></td>
      </tr>

      <tr>
        <td>Others:</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colspan="8"></td>
      </tr>

      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>

    <div class="dialog__wrapper" *ngIf="deleteDialog">
      <div
        class="dialog__content"
        style="padding: 2rem 5rem; height: auto; border-radius: 10px"
      >
        <h3 style="margin-bottom: 4rem;">Are you sure you want to delete?</h3>
        <div class="flex__row" style="justify-content: flex-end">
          <div style="padding: 1rem">
            <button (click)="deleteDialog = false" class="btn btn-primary">
              Cancel
            </button>
          </div>
          <div style="padding: 1rem">
            <button class="btn btn-danger" (click)="deleteActivity()">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="__menu" id="info-dialog">
      <div
        class="flex__row"
        style="background: #446CB3; padding: 0.1rem 1rem; border-radius: 0.5rem 0.5rem 0 0;"
      >
        <div style="flex: 1"></div>
        <div style="text-align: center; color: #fff;flex: 1;">Information</div>
        <div style="flex: 1">
          <div
            style="margin-left: auto; background: #fff;"
            class="btn__close"
            (click)="closeInfoDialog()"
          >
            x
          </div>
        </div>
      </div>

      <div class="flex__row">
        <div style="flex-basis: 25%">Name</div>
        <div style="flex-basis: 75%">: {{ patientName }}</div>
      </div>

      <div class="flex__row">
        <div style="flex-basis: 25%">Age</div>
        <div style="flex-basis: 75%">: {{ patientAge }} Yrs</div>
      </div>

      <div class="flex__row">
        <div style="flex-basis: 25%">AD Date</div>
        <div style="flex-basis: 75%">: {{ ADDate }}</div>
      </div>

      <div class="flex__row">
        <div style="flex-basis: 25%">Room</div>
        <div style="flex-basis: 75%">: {{ room }}</div>
      </div>

      <div class="flex__row">
        <div style="flex-basis: 25%">Doctor</div>
        <div style="flex-basis: 75%">: {{ doctor }}</div>
      </div>

      <div class="flex__row">
        <div style="flex-basis: 25%">Speciality</div>
        <div style="flex-basis: 75%">: {{ speciality }}</div>
      </div>

      <div class="flex__row">
        <div style="flex-basis: 25%">Type</div>
        <div style="flex-basis: 75%">: {{ patientType }}</div>
      </div>
    </div>

    <div class="dialog__wrapper" *ngIf="doctorDialog">
      <div class="dialog__content">
        <div class="flex__row">
          <div
            class="flex__row"
            style="padding: 1.15rem 0; align-items: center; background: #f8f9f9; flex: 2"
          >
            <div style="display: flex; flex-basis: 278px;">
              <input type="text" style="height: 25px; flex: 9; width: auto" />
              <img src="image/go.jpg" style="flex: 1; height: 25px;" />
            </div>

            <div
              style="display: flex; flex-direction: column; align-items: center; flex-basis: 300px;"
            >
              <img src="image/list.png" style="width: 25px; height: 25px" />
              <span
                style="color: darkblue; font-size: 12px; cursor: pointer; text-decoration: underline"
                >Show all</span
              >
            </div>

            <div
              style="display: flex; flex-direction: column; align-items: center; flex-basis: 300px;"
            >
              <img src="image/clear.png" style="width: 25px; height: 25px" />
              <span
                style="color: darkblue; font-size: 12px; cursor: pointer; text-decoration: underline"
                >Clear</span
              >
            </div>

            <div
              style="display: flex; flex-direction: column; align-items: center; flex-basis: 300px;"
            >
              <img
                src="image/advSearch.png"
                style="width: 25px; height: 25px"
              />
              <span
                style="color: darkblue; font-size: 12px; cursor: pointer; text-decoration: underline"
                >Advanced Search</span
              >
            </div>

            <div
              style="display: flex; flex-direction: column; align-items: center; flex-basis: 300px;"
            >
              <img src="image/export.png" style="width: 25px; height: 25px" />
              <span
                style="color: darkblue; font-size: 12px; cursor: pointer; text-decoration: underline"
                >Export</span
              >
            </div>
          </div>
          <div class="flex__item">
            <div
              class="btn__close"
              style="margin-left: auto"
              (click)="browseDoctor(false)"
            >
              x
            </div>
          </div>
        </div>

        <div style="display: flex; align-items: center">
          <div
            style="height: 17px; border: 1px solid #bbb; border-bottom: 1px solid #a0a0a0; border-radius: 7px; padding-left: .7rem; width: 30px; margin: 0 0.5rem;"
            (click)="skipStart('doctors')"
          >
            <img src="image/first.gif" style="width: 20px; height: 15px;" />
          </div>

          <div
            style="height: 17px; border: 1px solid #bbb; border-bottom: 1px solid #a0a0a0; border-radius: 7px; padding-left: .7rem; width: 30px; margin: 0 0.5rem;"
            (click)="prevHandler('doctors')"
          >
            <img src="image/prev.gif" style="width: 20px; height: 15px;" />
          </div>

          <select
            style="height: 20px; flex-basis: 50px;"
            [(ngModel)]="perPage"
            (change)="onPerPageChanged($event, 'doctors')"
          >
            <option *ngFor="let item of perPages" [value]="item">
              {{ item }}
            </option>
          </select>

          <div
            style="height: 17px; border: 1px solid #bbb; border-bottom: 1px solid #a0a0a0; border-radius: 7px; padding-left: .7rem; width: 30px; margin: 0 0.5rem;"
            (click)="nextHandler('doctors')"
          >
            <img src="image/next.gif" style="width: 20px; height: 15px;" />
          </div>

          <div
            style="height: 17px; border: 1px solid #bbb; border-bottom: 1px solid #a0a0a0; border-radius: 7px; padding-left: .7rem; width: 30px; margin: 0 0.5rem;"
            (click)="skipLast('doctors')"
          >
            <img src="image/last.gif" style="width: 20px; height: 15px;" />
          </div>

          <div class="patient__label">
            {{ start + 1 }} - {{ end }} of {{ original.doctors.length }}
          </div>
        </div>

        <div class="flex__row">
          <table class="flex__item __table">
            <thead>
              <tr>
                <th *ngFor="let header of tableHeaders">
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let doctor of doctors" (click)="selectDoctor(doctor)">
                <td style="text-decoration: underline">
                  {{ doctor.doctorID }}
                </td>
                <td style="text-decoration: underline">
                  {{ doctor.doctorName }}
                </td>
                <td>{{ doctor.speciality }}</td>
                <td>{{ doctor.rank }}</td>
                <td>{{ doctor.degree }}</td>
                <td>{{ doctor.phone }}</td>
                <td>{{ doctor.clinic }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div style="width: 100%; padding: 2rem 3rem;">
      <div style="display: flex; align-items: center; margin-bottom: 1rem;">
        <img src="image/find1.jpg" style="width: 25px; height: 25px;" />
        <div
          style="flex-basis: 100px; padding-left: 7px;"
          class="patient__label"
        >
          {{ patientId }}
        </div>
        <div style="flex-basis: 250px;" class="patient__label">
          {{ patientName }}
        </div>
        <div style="flex-basis: 100px; padding-right: 12px;">AD No.</div>
        <div style="flex-basis: 150px; ">
          <select
            class="form-control"
            style="width: 100%"
            [(ngModel)]="adNo"
            (change)="onAdNoChanged($event)"
          >
            <option *ngFor="let item of adNos" [value]="item.value">
              {{ item.text }}
            </option>
          </select>
        </div>
        <img
          (click)="viewInfo($event)"
          src="image/info.jpg"
          style="width: 45px; height: 25px; padding: 0 10px;"
        />
        <div class="menu__link">Clear</div>
        <div style="flex-basis: 135px;"></div>
        <div class="menu__link">eMR</div>
      </div>

      <div style="display: flex">
        <div
          class="tab__list-item"
          style="background: #3b5998"
          (click)="tabClickHandler(1)"
          id="tab1"
        >
          List
        </div>
        <div class="tab__list-item" (click)="tabClickHandler(2)" id="tab2">
          Nurse Activity
        </div>
      </div>
      <div style="display: flex">
        <div
          style="flex-basis: 1080px; display: flex; border: 1px solid #92c1f0; padding-bottom: 4rem"
        >
          <div *ngIf="tabNo == 2" style="flex: 1;">
            <div style="display: flex; margin-top: 1rem; margin-bottom: 4rem;">
              <button
                class="btn__crud btn btn-primary"
                (click)="clickNewHandler()"
              >
                New
              </button>
              <button
                class="btn__crud btn btn-primary"
                (click)="clickSaveHandler()"
              >
                Save
              </button>
              <button
                class="btn__crud btn btn-danger"
                (click)="clickDeleteHandler()"
              >
                Delete
              </button>
              <button
                class="btn__crud btn btn-primary"
                (click)="clickPrintHandler()"
              >
                Print
              </button>
            </div>

            <div class="flex__row">
              <div class="flex__item">
                <div class="flex__row">
                  <div class="flex__item" style="flex: 0 0 30%">Doctor</div>

                  <div class="flex__item flex__row" style="flex: 0 0 30%">
                    <input
                      class="form-control"
                      [(ngModel)]="doctorName"
                      style="height: 25px; flex: 9; width: auto;"
                    />
                    <img
                      (click)="browseDoctor()"
                      src="image/advSearch.png"
                      style="width: 25px; height: 25px; flex: 1;"
                    />
                  </div>
                </div>

                <div class="flex__row" style="align-items: center">
                  <div class="flex__item" style="flex: 0 0 30%">Date</div>

                  <div class="flex__item" style="flex: 0 0 64.5%;">
                    <datetime
                      class="__datepicker"
                      [(ngModel)]="date"
                      [datepicker]="_datepickerOpts"
                      [ngModelOptions]="{ standalone: true }"
                    ></datetime>
                  </div>
                </div>

                <div class="flex__row">
                  <div class="flex__item" style="flex: 0 0 30%">Procedure</div>

                  <div class="flex__item" style="flex: 0 0 30%">
                    <select
                      class="form-control"
                      style="width: 208.3;"
                      [(ngModel)]="procedure"
                    >
                      <option
                        *ngFor="let item of procedures"
                        [value]="item.value"
                      >
                        {{ item.text }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div style="flex: 2">
                <div class="flex__row" style="align-items: center">
                  <div class="flex__item">Due Date for Change</div>

                  <div class="flex__item">
                    <datetime
                      class="__datepicker"
                      style="width: 208.3;"
                      [(ngModel)]="dueDateChange"
                      [datepicker]="_datepickerOpts"
                      [ngModelOptions]="{ standalone: true }"
                    ></datetime>
                  </div>

                  <div class="flex__item"></div>
                </div>

                <div class="flex__row" style="align-items: center">
                  <div class="flex__item">Due Date for Remove</div>

                  <div class="flex__item">
                    <datetime
                      class="__datepicker"
                      style="width: 208.3;"
                      [(ngModel)]="dueDateRemove"
                      [datepicker]="_datepickerOpts"
                      [ngModelOptions]="{ standalone: true }"
                    ></datetime>
                  </div>

                  <div class="flex__item"></div>
                </div>

                <div class="flex__row" style="align-items: center">
                  <div class="flex__item">Size</div>

                  <div class="flex__item">
                    <input
                      class="form-control"
                      type="text"
                      style="width: 100%; height: 25px"
                      [(ngModel)]="size"
                    />
                  </div>

                  <div class="flex__item">
                    <input
                      class="form-control"
                      type="text"
                      style="width: 100%;  height: 25px"
                      [(ngModel)]="sizeUnit"
                    />
                  </div>
                </div>

                <div class="flex__row" style="align-items: center">
                  <div class="flex__item">Site</div>

                  <div class="flex__item">
                    <input
                      class="form-control"
                      type="text"
                      style="width: 100%; height: 25px"
                      [(ngModel)]="site"
                    />
                  </div>

                  <div class="flex__item">
                    <input
                      class="form-control"
                      type="text"
                      style="width: 100%;  height: 25px"
                      [(ngModel)]="siteUnit"
                    />
                  </div>
                </div>

                <div class="flex__row" style="align-items: center">
                  <div class="flex__item">Marking</div>

                  <div class="flex__item">
                    <input
                      class="form-control"
                      type="text"
                      style="width: 100%; height: 25px"
                      [(ngModel)]="marking"
                    />
                  </div>

                  <div class="flex__item">
                    <input
                      class="form-control"
                      type="text"
                      style="width: 100%; height: 25px"
                      [(ngModel)]="markingUnit"
                    />
                  </div>
                </div>

                <div class="flex__row" style="align-items: center">
                  <div class="flex__item">External Length</div>

                  <div class="flex__item">
                    <input
                      class="form-control"
                      type="text"
                      style="width: 100%; height: 25px"
                      [(ngModel)]="externalLength"
                    />
                  </div>

                  <div class="flex__item">
                    <input
                      class="form-control"
                      type="text"
                      style="width: 100%;  height: 25px"
                      [(ngModel)]="externalLengthUnit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div *ngIf="tabNo == 1" style="flex: 1">
            <div class="flex__row">
              <div
                class="flex__row"
                style="padding: 1.15rem 0; align-items: center; background: #f8f9f9; flex: 2"
              >
                <div style="display: flex; flex-basis: 278px;">
                  <input type="text" style="height: 25px; flex: 9" />
                  <img src="image/go.jpg" style="flex: 1; height: 25px;" />
                </div>

                <div
                  style="display: flex; flex-direction: column; align-items: center; flex-basis: 300px;"
                >
                  <img src="image/list.png" style="width: 25px; height: 25px" />
                  <span
                    style="color: darkblue; font-size: 12px; cursor: pointer; text-decoration: underline"
                    >Show all</span
                  >
                </div>

                <div
                  style="display: flex; flex-direction: column; align-items: center; flex-basis: 300px;"
                >
                  <img
                    src="image/clear.png"
                    style="width: 25px; height: 25px"
                  />
                  <span
                    style="color: darkblue; font-size: 12px; cursor: pointer; text-decoration: underline"
                    >Clear</span
                  >
                </div>

                <div
                  style="display: flex; flex-direction: column; align-items: center; flex-basis: 300px;"
                >
                  <img
                    src="image/advSearch.png"
                    style="width: 25px; height: 25px"
                  />
                  <span
                    style="color: darkblue; font-size: 12px; cursor: pointer; text-decoration: underline"
                    >Advanced Search</span
                  >
                </div>

                <div
                  style="display: flex; flex-direction: column; align-items: center; flex-basis: 300px;"
                >
                  <img
                    src="image/export.png"
                    style="width: 25px; height: 25px"
                  />
                  <span
                    style="color: darkblue; font-size: 12px; cursor: pointer; text-decoration: underline"
                    >Export</span
                  >
                </div>
              </div>
              <div class="flex__item"></div>
            </div>

            <div style="display: flex; align-items: center">
              <div
                style="height: 17px; border: 1px solid #bbb; border-bottom: 1px solid #a0a0a0; border-radius: 7px; padding-left: .7rem; width: 30px; margin: 0 0.5rem;"
                (click)="skipStart('activities')"
              >
                <img src="image/first.gif" style="width: 20px; height: 15px;" />
              </div>

              <div
                style="height: 17px; border: 1px solid #bbb; border-bottom: 1px solid #a0a0a0; border-radius: 7px; padding-left: .7rem; width: 30px; margin: 0 0.5rem;"
                (click)="prevHandler('activities')"
              >
                <img src="image/prev.gif" style="width: 20px; height: 15px;" />
              </div>

              <select
                style="height: 20px; flex-basis: 50px;"
                [(ngModel)]="perPage"
                (change)="onPerPageChanged($event, 'activities')"
              >
                <option *ngFor="let item of perPages" [value]="item">
                  {{ item }}
                </option>
              </select>

              <div
                style="height: 17px; border: 1px solid #bbb; border-bottom: 1px solid #a0a0a0; border-radius: 7px; padding-left: .7rem; width: 30px; margin: 0 0.5rem;"
                (click)="nextHandler('activities')"
              >
                <img src="image/next.gif" style="width: 20px; height: 15px;" />
              </div>

              <div
                style="height: 17px; border: 1px solid #bbb; border-bottom: 1px solid #a0a0a0; border-radius: 7px; padding-left: .7rem; width: 30px; margin: 0 0.5rem;"
                (click)="skipLast('activities')"
              >
                <img src="image/last.gif" style="width: 20px; height: 15px;" />
              </div>

              <div class="patient__label">
                {{ start + 1 }} - {{ end }} of {{ original.activities.length }}
              </div>
            </div>

            <div class="flex__row">
              <table class="flex__item __table">
                <thead>
                  <tr>
                    <th *ngFor="let header of tableListHeaders">
                      {{ header }}
                    </th>
                  </tr>
                </thead>
                <tbody *ngIf="$moment">
                  <tr
                    *ngFor="let activity of activities"
                    (click)="previewActivity(activity)"
                  >
                    <td>
                      {{ getProcedure(activity) }}
                    </td>
                    <td>
                      {{ $moment(activity.date).format("DD/MM/yyyy") }}
                    </td>
                    <td>
                      {{ $moment(activity.dueDateChange).format("DD/MM/yyyy") }}
                    </td>
                    <td>
                      {{ $moment(activity.dueDateRemove).format("DD/MM/yyyy") }}
                    </td>
                    <td>{{ activity.size }}</td>
                    <td>{{ activity.site }}</td>
                    <td>{{ activity.marking }}</td>
                    <td>{{ activity.externalLength }}</td>
                    <td>{{ activity.doctorName }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class FrmNursingActivityWorklist implements OnInit {
  $moment = null;
  dummyPatient = "HRN-0000002";
  activities = [];
  isUpdate = false;
  currentSysKey = 0;
  patientId: string = "R20-000017";
  patientName: string = "Htet Lin Maung";
  adNos = [{ value: 0, text: "20-A0010" }];
  adNo: number = 0;
  tabNo: number = 1;
  perPage = 10;
  perPages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  procedures = [];
  procedure = "1";
  date: any = "";
  dueDateChange: any = "";
  dueDateRemove: any = "";
  size = "";
  sizeUnit = "mm";
  site = "";
  siteUnit = "mm";
  marking = "";
  markingUnit = "cm";
  externalLength = "";
  externalLengthUnit = "mm";
  doctorDialog = false;
  deleteDialog = false;
  tableHeaders = [
    "ID",
    "Name",
    "Speciality",
    "Rank",
    "Degree",
    "Phone",
    "Clinic",
  ];
  tableListHeaders = [
    "Procedure",
    "Date",
    "Due Date For Change",
    "Due Date For Remove",
    "Size",
    "Site",
    "Marking",
    "External Length",
    "Doctor Name",
  ];
  start = 0;
  end = this.perPage;
  doctors = [];
  doctorName = "";
  doctorSysKey = 0;
  original = {
    activities: [],
    doctors: [],
  };
  page = 1;
  totalPage = 0;
  filterdPrintData = [];
  headerData = [];
  infoDialog = false;
  patientAge = 0;
  ADDate = "";
  room = "";
  doctor = "";
  speciality = "";
  patientType = "";

  subscription: Subscription;
  sub: any;

  _util: ClientUtil = new ClientUtil();
  _datepickerOpts: any = this._util.getDatePicker();

  constructor(
    private ics: RpIntercomService,
    private _router: Router,
    private route: ActivatedRoute,
    private http: RpHttpService
  ) {
    this.subscription = ics.rpbean$.subscribe((x) => {});
    if (!ics.getRole() || ics.getRole() == 0) this._router.navigate(["/login"]);
  }

  initPagination() {
    this.page = 1;
    this.start = 0;
    if (this.tabNo === 1) {
      this.totalPage = Math.ceil(
        this.original.activities.length / this.perPage
      );
      this.end = this.perPage;
      if (this.original.activities.length < this.perPage) {
        this.end = this.original.activities.length;
      }
    }
  }

  onAdNoChanged(event) {
    const data = this.headerData.find((v) => v.refNo == event.target.value);
    this.patientId = data.patientid;
    this.patientName = data.persontitle + " " + data.personname;
    this.patientAge = data.age;
    this.ADDate = data.arriveDate;
    this.room = data.roomNo;
    this.doctor = data.doctorName;
    this.speciality = data.speciality;
    this.patientType = data.patientType;
  }

  onPerPageChanged(event, ref: string) {
    this.start = 0;
    this.page = 1;
    this.totalPage = Math.ceil(this.original[ref].length / event.target.value);
    this.end = event.target.value;
    if (this.original[ref].length < this.perPage) {
      this.end = this.original[ref].length;
    }
    this[ref] = this.original[ref].slice(this.start, this.end);
  }

  getProcedure({ procedure }) {
    const item = this.procedures.find((v) => v.value == procedure.toString());
    if (item) {
      return item.text;
    }
    return "";
  }

  fetchProcedures() {
    this.http
      .doGet(this.ics._apiurl + "nurse-activity-worklist/procedures")
      .subscribe(
        (data) => {
          this.procedures = data;
          console.log(this.procedures);
          this.fetchActivities();
        },
        (error) => {},
        () => {}
      );
  }

  fetchActivities() {
    this.http
      .doGet(this.ics._apiurl + "nurse-activity-worklist/activities")
      .subscribe(
        (data) => {
          this.original.activities = [...data];
          this.totalPage = Math.ceil(data.length / this.perPage);
          this.end = this.perPage;
          if (data.length < this.perPage) {
            this.end = data.length;
          }
          this.activities = data.slice(this.start, this.end);
          console.log(data);
          console.log(this.start, this.end);
        },
        (error) => {},
        () => {}
      );
  }

  fetchDoctors() {
    this.initPagination();
    this.http
      .doGet(this.ics._apiurl + "nurse-activity-worklist/doctors")
      .subscribe(
        (data) => {
          this.original.doctors = [...data];

          console.log(data);
        },
        (error) => {},
        () => {}
      );
  }

  selectDoctor({ syskey, doctorName }: { syskey: number; doctorName: string }) {
    this.doctorSysKey = syskey;
    this.doctorName = doctorName;
    this.doctorDialog = false;
  }

  previewActivity(activity: any) {
    this.tabNo = 2;
    this.procedure = activity.procedure.toString();
    this.date = new Date(activity.date);
    this.dueDateChange = new Date(activity.dueDateChange);
    this.dueDateRemove = new Date(activity.dueDateRemove);
    this.size = activity.size;
    this.site = activity.site;
    this.marking = activity.marking;
    this.externalLength = activity.externalLength;
    this.doctorName = activity.doctorName;
    this.doctorSysKey = activity.doctorId;
    this.isUpdate = true;
    this.currentSysKey = activity.syskey;
    this.siteUnit = activity.siteUnit;
    this.sizeUnit = activity.sizeUnit;
    this.markingUnit = activity.markingUnit;
    this.externalLengthUnit = activity.externalLengthUnit;
  }

  tabClickHandler(n: number) {
    const tabEle1 = document.getElementById("tab1");
    const tabEle2 = document.getElementById("tab2");
    switch (n) {
      case 1:
        this.initPagination();
        tabEle1.style.background = "#3b5998";
        tabEle2.style.background = "#8C9899";
        break;
      default:
        tabEle2.style.background = "#3b5998";
        tabEle1.style.background = "#8C9899";
    }
    this.tabNo = n;
    console.log(n);
  }

  browseDoctor(flag = true) {
    this.initPagination();
    const data = this.original.doctors;
    this.totalPage = Math.ceil(data.length / this.perPage);
    this.end = this.perPage;
    if (data.length < this.perPage) {
      this.end = data.length;
    }
    this.doctors = data.slice(this.start, this.end);
    this.doctorDialog = flag;
  }

  clickNewHandler() {
    this.doctorName = "";
    this.doctorSysKey = 0;
    this.procedure = "1";
    this.date = "";
    this.dueDateChange = "";
    this.dueDateRemove = "";
    this.size = "";
    this.sizeUnit = "mm";
    this.site = "";
    this.siteUnit = "mm";
    this.marking = "";
    this.markingUnit = "cm";
    this.externalLength = "";
    this.externalLengthUnit = "mm";
    this.isUpdate = false;
  }

  clickSaveHandler() {
    this.http
      .doPost(
        this.ics._apiurl +
          `nurse-activity-worklist/${
            !this.isUpdate ? "save" : `update/${this.currentSysKey}`
          }`,
        {
          pId: 1,
          RgsNo: 1,
          userid: "",
          username: "",
          doctorSysKey: this.doctorSysKey,
          procedure: parseInt(this.procedure),
          date: (this.date as any).toISOString(),
          dueDateChange: (this.dueDateChange as any).toISOString(),
          dueDateRemove: (this.dueDateRemove as any).toISOString(),
          size: parseFloat(this.size || "0"),
          site: parseFloat(this.site || "0"),
          marking: parseFloat(this.marking || "0"),
          externalLength: parseFloat(this.externalLength || "0"),
          siteUnit: this.siteUnit,
          sizeUnit: this.sizeUnit,
          markingUnit: this.markingUnit,
          externalLengthUnit: this.externalLengthUnit,
        }
      )
      .subscribe(
        (data) => {
          console.log(data);
          if (!this.isUpdate) {
            this.currentSysKey = data.syskey;
          }
          this.isUpdate = true;
          this.fetchActivities();
        },
        (error) => {},
        () => {}
      );
  }

  deleteActivity() {
    if (!this.isUpdate) return;
    this.deleteDialog = false;
    this.http
      .doPost(
        this.ics._apiurl +
          `nurse-activity-worklist/delete/${this.currentSysKey}`,
        { syskey: this.currentSysKey }
      )
      .subscribe(
        (data) => {
          console.log(data);
          this.fetchActivities();
          this.clickNewHandler();
        },
        (error) => {},
        () => {}
      );
  }

  clickDeleteHandler() {
    this.deleteDialog = true;
  }

  clickPrintHandler() {
    this.http
      .doGet(this.ics._apiurl + "nurse-activity-worklist/get-by-patient/1")
      .subscribe(
        (printData) => {
          console.log(printData);
          const query1 = [5, 11, 16, 21, 25, 29, 33, 37, 41, 45]
            .map((n) => `#export_table tr:nth-child(${n}) td:nth-child(1)`)
            .join(", ");
          const query2 = [6, 12, 17, 22, 26, 30, 34, 38, 42, 46]
            .map((n) => `#export_table tr:nth-child(${n}) td:nth-child(1)`)
            .join(", ");
          const elems = document.querySelectorAll(query2);
          const proEles: any = document.querySelectorAll(query1);
          proEles.forEach((p, i) => {
            const tubeName = p.innerHTML.trim();
            const proRef = this.procedures.find((v) =>
              v.text.match(new RegExp(tubeName))
            );
            if (proRef) {
              this.filterdPrintData = printData.filter(
                (p) => p.procedure == proRef.value
              );
              if (this.filterdPrintData.length) {
                elems[i].innerHTML = this.$moment(
                  this.filterdPrintData[0].dueDateChange
                ).format("DD/MM/yyyy");
              }
            }
          });
          console.log(proEles);

          const { jsPDF } = (window as any).jspdf;
          console.log(window);
          const doc = new jsPDF();

          doc.autoTable({
            html: "#export_table",
            startY: 10,
            theme: "grid",
            didDrawCell: (data) => {
              switch (data.row.index) {
                case 4:
                case 10:
                case 15:
                case 20:
                case 24:
                case 28:
                case 32:
                case 36:
                case 40:
                case 44:
                  const tubeName = data.row.cells[0].text.join(" ");
                  const proRef = this.procedures.find((v) =>
                    v.text.match(new RegExp(tubeName))
                  );
                  if (proRef) {
                    this.filterdPrintData = printData.filter(
                      (p) => p.procedure == proRef.value
                    );
                  }
                  this.filterdPrintData.forEach((p, i) => {
                    if (i < 7) {
                      data.row.cells[i + 1].text[0] = this.$moment(
                        p.date
                      ).format("DD/MM/yyyy");
                    }
                  });
                  break;
                case 5:
                case 11:
                case 16:
                case 21:
                case 25:
                case 29:
                case 33:
                case 37:
                case 41:
                case 45:
                  // Due Date
                  this.filterdPrintData.forEach((p, i) => {
                    if (i < 7) {
                      data.row.cells[i + 1].text[0] = this.$moment(
                        p.dueDateChange
                      ).format("DD/MM/yyyy");
                    }
                  });
                  break;
                case 34:
                  this.filterdPrintData.forEach((p, i) => {
                    if (i < 7) {
                      data.row.cells[i + 1].text[0] =
                        p.site + p.siteUnit + " & " + p.size + p.sizeUnit;
                    }
                  });
                  break;
                case 17:
                case 22:
                case 26:
                case 30:
                case 38:
                  this.filterdPrintData.forEach((p, i) => {
                    if (i < 7) {
                      data.row.cells[i + 1].text[0] = p.site + p.siteUnit;
                    }
                  });
                  break;
                case 6:
                case 12:
                case 18:
                case 42:
                case 46:
                  this.filterdPrintData.forEach((p, i) => {
                    if (i < 7) {
                      data.row.cells[i + 1].text[0] = p.size + p.sizeUnit;
                    }
                  });
                  break;
                case 47:
                case 8:
                  this.filterdPrintData.forEach((p, i) => {
                    if (i < 7) {
                      data.row.cells[i + 1].text[0] =
                        p.externalLength + p.externalLengthUnit;
                    }
                  });
                  break;
                case 7:
                case 13:
                  this.filterdPrintData.forEach((p, i) => {
                    if (i < 7) {
                      data.row.cells[i + 1].text[0] = p.marking + p.markingUnit;
                    }
                  });
                  break;
              }
            },
            willDrawCell: (data) => {
              switch (data.row.index) {
                case 0:
                  doc.setFillColor("#CDC8C8");
                  doc.setTextColor("#fff");
                  break;
                case 3:
                case 9:
                case 14:
                case 19:
                case 23:
                case 27:
                case 31:
                case 35:
                case 39:
                case 43:
                case 48:
                case 50:
                  data.row.height = 1;
                  doc.setFillColor("#CDC8C8");
              }
            },
            styles: {
              fontSize: 9,
              minCellHeight: 1,
              cellPadding: 1,
              valign: "middle",
            },
          });

          doc.save("a4.pdf");
        },
        (error) => {},
        () => {}
      );
  }

  skipLast(ref: string) {
    this.page = this.totalPage;
    this.start = (this.page - 1) * this.perPage;
    if (this.original[ref].length % this.perPage === 0) {
      this.end = this.page * this.perPage;
    } else {
      this.end = this.start + (this.original[ref].length % this.perPage);
    }
    this[ref] = this.original[ref].slice(this.start, this.end);
    if (this.start === this.end) {
      this[ref] = this.original[ref].slice(this.start, this.end + 1);
    }
  }

  skipStart(ref: string) {
    this.page = 1;
    this.start = (this.page - 1) * this.perPage;
    this.end = this.perPage;
    if (this.original[ref].length < this.perPage) {
      this.end = this.original[ref].length.length;
    }
    this[ref] = this.original[ref].slice(this.start, this.end);
  }

  nextHandler(ref: string) {
    if (this.page !== this.totalPage) {
      this.page++;
      this.end = this.page * this.perPage;
      this.start = (this.page - 1) * this.perPage;
    } else {
      this.start = (this.page - 1) * this.perPage;
      if (this.original[ref].length % this.perPage === 0) {
        this.end = this.page * this.perPage;
      } else {
        this.end = this.start + (this.original[ref].length % this.perPage);
      }
    }

    this[ref] = this.original[ref].slice(this.start, this.end);
  }

  prevHandler(ref: string) {
    if (this.page !== 1) {
      this.page--;
      this.end = this.page * this.perPage;
      this.start = (this.page - 1) * this.perPage;
    } else {
      this.start = (this.page - 1) * this.perPage;
      this.end = this.perPage;
      if (this.original[ref].length < this.perPage) {
        this.end = this.original[ref].length.length;
      }
    }

    this[ref] = this.original[ref].slice(this.start, this.end);
  }

  fetchPatientInfoById(patientId) {
    this.http
      .doGet(
        `${this.ics._apiurl}nurse-activity-worklist/patient-info/${patientId}`
      )
      .subscribe(
        (data) => {
          this.headerData = data;
          if (data.length) {
            this.patientId = data[0].patientid;
            this.patientName = data[0].persontitle + " " + data[0].personname;
            this.patientAge = data[0].age;
            this.ADDate = data[0].arriveDate;
            this.room = data[0].roomNo;
            this.doctor = data[0].doctorName;
            this.speciality = data[0].speciality;
            this.patientType = data[0].patientType;
            this.adNos = data.map((v) => ({
              value: v.refNo,
              text: v.refNo,
            }));
            this.adNo = data[0].refNo;
          }
        },
        (error) => {},
        () => {}
      );
  }

  viewInfo(e) {
    const dialogEle = document.getElementById("info-dialog");
    dialogEle.style.left = e.clientX;
    dialogEle.style.top = e.clientY;
    dialogEle.style.display = "block";
  }

  closeInfoDialog() {
    const dialogEle = document.getElementById("info-dialog");
    dialogEle.style.display = "none";
  }

  ngOnInit() {
    this.fetchPatientInfoById(this.dummyPatient);
    this.$moment = moment;
    this.fetchProcedures();
    this.fetchDoctors();
  }

  ngOnDestroy() {}
}
