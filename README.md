# ei-dashboard

This is a monitoring dashboard for extensible internet, it is implemented as a POX component module https://github.com/MurphyMc/pox. This dashbaord also requires an web component to get running

The current dashboard contains two part, the first one is the per-component console logs. The second one is the information generated by trees, including Config, ServiceModules and Pipes

I have uploaded the script as the example to run the dashboard. You could put `web` and `ei-dashboard` behind the component you want to get console logs

```sh
./pox.py samples.pretty_log web ei-dashboard
```


Use Example:
1. Download `ei-dashboard` under the `ext` folder, and put the files udner `scripts` folder into `ext/ei/scripts/`

2. Launch SNs and Pipes with scripts Emily send previously, which is under `scripts` folder. Run the following command in seperate window under `pox` folder
    ```sh
    ext/ei/scripts/for_xinyan_start_eiip.sh 1 1
    ```
    ```sh
    ext/ei/scripts/for_xinyan_start_eiip2.sh 1 2
    ```

3. The dashboard should be available under http://127.0.0.1:8000/dashboard/

4. You could click each button to get the relative information tree, currently you should be able to view Config, ServiceModules and Pipes trees

    ![Screenshot 2023-05-21 at 1 16 16 PM](https://github.com/XinyanHe/ei-dashboard/assets/45219781/bba3e913-92ea-405e-a79f-dcae763f57b8)

5. Stop running the EI components
    ```sh
    ext/ei/scripts/killpox.sh
    ```
