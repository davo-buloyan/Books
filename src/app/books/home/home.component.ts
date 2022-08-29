import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { selectAppState } from 'src/app/shared/store/app.selector';
import { Appstate } from 'src/app/shared/store/appstate';
import { invokeBooksAPI, invokeDeleteBookAPI } from '../store/books.action';
import { selectBooks } from '../store/books.selector';

declare let window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private store: Store,
    private appStore:Store<Appstate>
    ) {}

  books$ = this.store.pipe(select(selectBooks));
  deleteModal: any;
  idToDelete: number = 0;

  ngOnInit(): void {

    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById("deleteModal")
    );

    this.store.dispatch(invokeBooksAPI());
  }

  openDeleteModal(id: number) {
    this.idToDelete = id;
    this.deleteModal.show()
  }

  confirmDelete() {
    this.store.dispatch(invokeDeleteBookAPI({id: this.idToDelete}))

    let appStatus$ = this.appStore.pipe(select(selectAppState));
    appStatus$.subscribe((data) => {
      if (data.apiStatus === 'success') {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiStatus: '', apiResponseMessage: '' } })
        );
          this.deleteModal.hide()
      }
    });
  }
}
