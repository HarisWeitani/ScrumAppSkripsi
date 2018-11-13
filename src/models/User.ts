export class User {

  private username: string;
  private email: string;

	constructor($username: string, $email: string) {
		this.username = $username;
		this.email = $email;
  }

    /**
     * Getter $email
     * @return {string}
     */
    public get $email(): string {
      return this.email;
    }
  
      /**
       * Setter $email
       * @param {string} value
       */
    public set $email(value: string) {
      this.email = value;
    }

  
      /**
       * Getter $username
       * @return {string}
       */
    public get $username(): string {
      return this.username;
    }

      /**
       * Setter $username
       * @param {string} value
       */
    public set $username(value: string) {
      this.username = value;
    }

}