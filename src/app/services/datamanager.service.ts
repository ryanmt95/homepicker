import { Injectable} from '@angular/core';

/*
This class implements the controller DataManager.
This class is responsible for the interactions with the server &
api calls.
*/
@Injectable({
    providedIn: 'root',
})
export class DataManager {

    public create_account(email: string, hash: string): void {}

    public verify_email(email: string): boolean {
        return false
    }

    public retrieve_hash(email: string): void {
    }

    public update_preferences(hash: string): void {}

    public store_preferences(preferences: []) {}

    public store_priorities(priorities: []) {}

    public store_results(results: []) {}

    public get_results(): void {}
}